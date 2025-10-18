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

    // Handle collection webhook events
    switch (topic) {
      case 'collections/create':
        await handleCollectionCreate(webhookData);
        break;
      
      case 'collections/update':
        await handleCollectionUpdate(webhookData);
        break;
      
      case 'collections/delete':
        await handleCollectionDelete(webhookData);
        break;
      
      default:
        console.warn(`Unhandled collection webhook topic: ${topic}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });

  } catch (error) {
    console.error('Error processing collection webhook:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

async function handleCollectionCreate(collection: any) {
  console.log(`[Collection Created] ${collection.title} (${collection.handle})`);
  
  // Revalidate navigation and collection pages
  const pathsToRevalidate = [
    '/', // Home page
    '/search', // Main catalog page
    `/search/${collection.handle}`, // New collection page
  ];

  await revalidatePaths(pathsToRevalidate);
}

async function handleCollectionUpdate(collection: any) {
  console.log(`[Collection Updated] ${collection.title} (${collection.handle})`);
  
  // Revalidate the collection page and navigation
  const pathsToRevalidate = [
    '/', // Home page
    '/search', // Main catalog page
    `/search/${collection.handle}`, // Updated collection page
  ];

  await revalidatePaths(pathsToRevalidate);
}

async function handleCollectionDelete(collection: any) {
  console.log(`[Collection Deleted] ${collection.title} (${collection.handle})`);
  
  // Revalidate navigation to remove deleted collection
  const pathsToRevalidate = [
    '/', // Home page
    '/search', // Main catalog page
  ];

  await revalidatePaths(pathsToRevalidate);
  
  // Note: The specific collection page will naturally return 404 after deletion
}