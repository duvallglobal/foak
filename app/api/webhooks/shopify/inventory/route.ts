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

    // Handle inventory level updates
    if (topic === 'inventory_levels/update') {
      await handleInventoryLevelUpdate(webhookData);
    } else {
      console.warn(`Unhandled inventory webhook topic: ${topic}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });

  } catch (error) {
    console.error('Error processing inventory webhook:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

async function handleInventoryLevelUpdate(inventoryLevel: any) {
  console.log(`[Inventory Updated] Item ID: ${inventoryLevel.inventory_item_id}, Available: ${inventoryLevel.available}`);
  
  // Critical: Revalidate all product pages since we can't easily map inventory_item_id to product handle
  // In a real-world scenario, you might want to maintain a mapping or query Shopify API
  const pathsToRevalidate = [
    '/', // Home page
    '/search', // Search/catalog page - most important for stock display
  ];

  await revalidatePaths(pathsToRevalidate);
  
  // Optional: You could also implement a more sophisticated approach:
  // 1. Query Shopify API to get the product handle from inventory_item_id
  // 2. Then revalidate the specific product page
  // 3. But the above approach ensures all pages stay in sync
}