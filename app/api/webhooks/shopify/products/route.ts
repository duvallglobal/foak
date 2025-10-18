import { logWebhookEvent, revalidatePaths, verifyShopifyWebhook } from 'lib/shopify/webhooks';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Get the raw body for signature verification
    const rawBody = await request.text();
    const signature = request.headers.get('x-shopify-hmac-sha256');
    
    if (!signature) {
      console.error('Missing Shopify webhook signature');
      return NextResponse.json({ error: 'Missing signature' }, { status: 401 });
    }

    // Verify the webhook signature
    if (!verifyShopifyWebhook(rawBody, signature)) {
      console.error('Invalid Shopify webhook signature');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    // Parse the webhook data
    const webhookData = JSON.parse(rawBody);
    const topic = request.headers.get('x-shopify-topic');

    if (!topic) {
      console.error('Missing Shopify topic header');
      return NextResponse.json({ error: 'Missing topic' }, { status: 400 });
    }

    // Log the webhook event
    logWebhookEvent(topic, webhookData);

    // Handle different product webhook events
    switch (topic) {
      case 'products/create':
        await handleProductCreate(webhookData);
        break;
      
      case 'products/update':
        await handleProductUpdate(webhookData);
        break;
      
      case 'products/delete':
        await handleProductDelete(webhookData);
        break;
      
      default:
        console.warn(`Unhandled product webhook topic: ${topic}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });

  } catch (error) {
    console.error('Error processing product webhook:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

async function handleProductCreate(product: any) {
  console.log(`[Product Created] ${product.title} (${product.handle})`);
  
  // Revalidate pages that need to show the new product
  const pathsToRevalidate = [
    '/', // Home page
    '/search', // Search/catalog page
    `/product/${product.handle}`, // New product page
  ];

  // If the product is in collections, revalidate those too
  if (product.product_type) {
    pathsToRevalidate.push(`/search/${product.product_type.toLowerCase()}`);
  }

  await revalidatePaths(pathsToRevalidate);
}

async function handleProductUpdate(product: any) {
  console.log(`[Product Updated] ${product.title} (${product.handle})`);
  
  // Revalidate the specific product page and catalog pages
  const pathsToRevalidate = [
    '/', // Home page (in case it's featured)
    '/search', // Search/catalog page
    `/product/${product.handle}`, // Updated product page
  ];

  // If the product is in collections, revalidate those too
  if (product.product_type) {
    pathsToRevalidate.push(`/search/${product.product_type.toLowerCase()}`);
  }

  await revalidatePaths(pathsToRevalidate);
}

async function handleProductDelete(product: any) {
  console.log(`[Product Deleted] ${product.title} (${product.handle})`);
  
  // Revalidate catalog pages to remove the deleted product
  const pathsToRevalidate = [
    '/', // Home page
    '/search', // Search/catalog page
  ];

  // If the product was in collections, revalidate those too
  if (product.product_type) {
    pathsToRevalidate.push(`/search/${product.product_type.toLowerCase()}`);
  }

  await revalidatePaths(pathsToRevalidate);
  
  // Note: The specific product page will naturally return 404 after deletion
}