import { logWebhookEvent, verifyShopifyWebhook } from 'lib/shopify/webhooks';
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

    // Handle different order webhook events
    switch (topic) {
      case 'orders/create':
        await handleOrderCreate(webhookData);
        break;
      
      case 'orders/paid':
        await handleOrderPaid(webhookData);
        break;
      
      case 'orders/fulfilled':
        await handleOrderFulfilled(webhookData);
        break;
      
      case 'orders/updated':
        await handleOrderUpdated(webhookData);
        break;
      
      case 'orders/cancelled':
        await handleOrderCancelled(webhookData);
        break;
      
      default:
        console.warn(`Unhandled order webhook topic: ${topic}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });

  } catch (error) {
    console.error('Error processing order webhook:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

async function handleOrderCreate(order: any) {
  console.log(`[Order Created] #${order.order_number} - $${order.total_price} - ${order.email}`);
  
  // Log order details for business tracking
  const orderSummary = {
    orderNumber: order.order_number,
    orderName: order.name,
    email: order.email,
    totalPrice: order.total_price,
    currency: order.currency,
    customerName: `${order.billing_address?.first_name || ''} ${order.billing_address?.last_name || ''}`.trim(),
    itemCount: order.line_items?.length || 0,
    items: order.line_items?.map((item: any) => ({
      title: item.title,
      quantity: item.quantity,
      price: item.price
    })) || [],
    shippingAddress: order.shipping_address ? {
      city: order.shipping_address.city,
      province: order.shipping_address.province,
      country: order.shipping_address.country,
      zip: order.shipping_address.zip
    } : null,
    createdAt: order.created_at
  };

  console.log('[Order Details]', JSON.stringify(orderSummary, null, 2));

  // Here you could:
  // 1. Send notification email to store owner
  // 2. Save to database for analytics
  // 3. Trigger fulfillment process
  // 4. Update inventory tracking
  // 5. Send to third-party services (CRM, analytics, etc.)
}

async function handleOrderPaid(order: any) {
  console.log(`[Order Paid] #${order.order_number} - Payment confirmed for $${order.total_price}`);
  
  // This is typically when you'd trigger fulfillment
  // The order is paid and ready to be processed
  
  console.log(`[Payment Info] Gateway: ${order.gateway}, Payment Status: ${order.financial_status}`);
}

async function handleOrderFulfilled(order: any) {
  console.log(`[Order Fulfilled] #${order.order_number} - Order has been shipped`);
  
  // Here you could:
  // 1. Send shipment notification to customer
  // 2. Update order tracking
  // 3. Generate shipping labels
  // 4. Update inventory
  
  if (order.fulfillments && order.fulfillments.length > 0) {
    const fulfillment = order.fulfillments[0];
    console.log(`[Fulfillment Details] Tracking: ${fulfillment.tracking_number || 'N/A'}, Company: ${fulfillment.tracking_company || 'N/A'}`);
  }
}

async function handleOrderUpdated(order: any) {
  console.log(`[Order Updated] #${order.order_number} - Order details changed`);
  
  // Handle any changes to the order
  // This could be address changes, item changes, etc.
}

async function handleOrderCancelled(order: any) {
  console.log(`[Order Cancelled] #${order.order_number} - Order has been cancelled`);
  
  // Handle order cancellation
  // Update inventory, process refunds, notify systems
  console.log(`[Cancellation] Reason: ${order.cancel_reason || 'Not specified'}, Cancelled at: ${order.cancelled_at}`);
}