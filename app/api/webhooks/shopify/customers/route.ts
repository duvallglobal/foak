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

    // Handle different customer webhook events
    switch (topic) {
      case 'customers/create':
        await handleCustomerCreate(webhookData);
        break;
      
      case 'customers/update':
        await handleCustomerUpdate(webhookData);
        break;
      
      default:
        console.warn(`Unhandled customer webhook topic: ${topic}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });

  } catch (error) {
    console.error('Error processing customer webhook:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

async function handleCustomerCreate(customer: any) {
  console.log(`[Customer Created] ${customer.email} - ${customer.first_name} ${customer.last_name}`);
  
  const customerInfo = {
    id: customer.id,
    email: customer.email,
    firstName: customer.first_name,
    lastName: customer.last_name,
    phone: customer.phone,
    acceptsMarketing: customer.accepts_marketing,
    ordersCount: customer.orders_count || 0,
    totalSpent: customer.total_spent || '0.00',
    createdAt: customer.created_at,
    tags: customer.tags || '',
    city: customer.default_address?.city || '',
    province: customer.default_address?.province || '',
    country: customer.default_address?.country || ''
  };

  console.log('[New Customer Details]', JSON.stringify(customerInfo, null, 2));

  // Here you could:
  // 1. Send welcome email
  // 2. Add to email marketing list (if accepts_marketing is true)
  // 3. Save to CRM
  // 4. Trigger welcome sequence
  // 5. Send to analytics platforms
  
  if (customer.accepts_marketing) {
    console.log(`[Marketing] Customer ${customer.email} has opted in for marketing emails`);
    // Add to your email marketing service (Mailchimp, Klaviyo, etc.)
  }
}

async function handleCustomerUpdate(customer: any) {
  console.log(`[Customer Updated] ${customer.email} - Profile updated`);
  
  // Handle customer profile updates
  // This could be address changes, marketing preferences, etc.
  
  const changes = {
    email: customer.email,
    acceptsMarketing: customer.accepts_marketing,
    ordersCount: customer.orders_count || 0,
    totalSpent: customer.total_spent || '0.00',
    updatedAt: customer.updated_at
  };

  console.log('[Customer Update Details]', JSON.stringify(changes, null, 2));

  // Sync updates to your systems
  // Update CRM, email lists, etc.
}