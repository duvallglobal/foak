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

    // Handle refund webhook events
    if (topic === 'refunds/create') {
      await handleRefundCreate(webhookData);
    } else {
      console.warn(`Unhandled refund webhook topic: ${topic}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });

  } catch (error) {
    console.error('Error processing refund webhook:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

async function handleRefundCreate(refund: any) {
  console.log(`[Refund Created] Order #${refund.order_id} - $${refund.amount}`);
  
  const refundInfo = {
    id: refund.id,
    orderId: refund.order_id,
    amount: refund.amount,
    currency: refund.currency,
    reason: refund.note || 'No reason provided',
    createdAt: refund.created_at,
    refundLineItems: refund.refund_line_items?.map((item: any) => ({
      lineItemId: item.line_item_id,
      quantity: item.quantity,
      subtotal: item.subtotal
    })) || [],
    transactions: refund.transactions?.map((transaction: any) => ({
      id: transaction.id,
      amount: transaction.amount,
      kind: transaction.kind,
      gateway: transaction.gateway,
      status: transaction.status
    })) || []
  };

  console.log('[Refund Details]', JSON.stringify(refundInfo, null, 2));

  // Here you could:
  // 1. Update accounting records
  // 2. Send refund confirmation email
  // 3. Update inventory (if restocking)
  // 4. Trigger analytics events
  // 5. Update customer service systems
  // 6. Send notifications to fulfillment centers
}