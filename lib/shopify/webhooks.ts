import crypto from 'crypto';

const WEBHOOK_SECRET = process.env.SHOPIFY_WEBHOOK_SECRET || '8a6d6c504c9e32691111890657515ce4d6a2375d34198bda930f024f498a040c';

/**
 * Verify the webhook signature from Shopify
 */
function verifyShopifyWebhook(rawBody: string, signature: string): boolean {
  if (!signature) {
    console.error('No signature provided in webhook request');
    return false;
  }

  try {
    const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET);
    hmac.update(rawBody, 'utf8');
    const computedHash = hmac.digest('base64');
    
    // Compare the computed hash with the signature from Shopify
    return crypto.timingSafeEqual(
      Buffer.from(computedHash, 'base64'),
      Buffer.from(signature, 'base64')
    );
  } catch (error) {
    console.error('Error verifying webhook signature:', error);
    return false;
  }
}

/**
 * Revalidate specific paths in Next.js
 */
async function revalidatePaths(paths: string[]) {
  const revalidatePromises = paths.map(async (path) => {
    try {
      const revalidateUrl = new URL('/api/revalidate', process.env.VERCEL_URL || 'http://localhost:3000');
      revalidateUrl.searchParams.set('path', path);
      revalidateUrl.searchParams.set('secret', process.env.SHOPIFY_REVALIDATION_SECRET || '');
      
      const response = await fetch(revalidateUrl.toString(), { method: 'POST' });
      
      if (!response.ok) {
        console.error(`Failed to revalidate ${path}:`, await response.text());
      } else {
        console.log(`Successfully revalidated: ${path}`);
      }
    } catch (error) {
      console.error(`Error revalidating ${path}:`, error);
    }
  });
  
  await Promise.allSettled(revalidatePromises);
}

/**
 * Log webhook event for monitoring
 */
function logWebhookEvent(topic: string, data: any) {
  console.log(`[Shopify Webhook] ${topic}:`, {
    timestamp: new Date().toISOString(),
    topic,
    id: data.id || 'unknown',
    shop: data.shop_domain || 'unknown'
  });
}

export { logWebhookEvent, revalidatePaths, verifyShopifyWebhook };
