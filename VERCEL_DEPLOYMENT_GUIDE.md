⚠️ **SECURITY WARNING**: Never commit real API keys, tokens, or credentials to version control. Always use environment variables for sensitive data.

# Vercel Deployment Guide - Final Steps

## ✅ Current Status
Your site is ready to deploy! Vercel CLI has been installed and the project is linked.

**Project Name**: `findsofallkindssite`  
**Dashboard URL**: https://vercel.com/dashboard

## 🔧 Fix Environment Variables

The deployment failed because the `SHOPIFY_STORE_DOMAIN` was incorrectly set. Follow these steps:

### Option 1: Fix via Vercel Dashboard (Recommended)
1. Go to your project's environment variables page in the Vercel dashboard
2. Find `SHOPIFY_STORE_DOMAIN` in the list
3. Click the **X** or **Edit** button
4. **Delete** the current value
5. Click **Add New** and create a new one:
   - **Name**: `SHOPIFY_STORE_DOMAIN`
   - **Value**: `${YOUR_SHOPIFY_STORE_DOMAIN}`
   - **Environments**: Select **Production**
   - Click **Save**

### Option 2: Fix via CLI (If Option 1 fails)
Run these commands in order:

```bash
cd /path/to/your/project

# Remove the incorrect value
vercel env remove SHOPIFY_STORE_DOMAIN production

# Add the correct value
vercel env add SHOPIFY_STORE_DOMAIN production
# When prompted, enter your Shopify store domain
```

## ✅ Verify Environment Variables

All required variables should be set in Production:

| Variable Name | Value | Status |
|---|---|---|
| `SHOPIFY_STORE_DOMAIN` | `${SHOPIFY_STORE_DOMAIN}` | ❌ NEEDS FIX |
| `SHOPIFY_STOREFRONT_ACCESS_TOKEN` | `${SHOPIFY_STOREFRONT_ACCESS_TOKEN}` | ✅ Set |
| `SHOPIFY_REVALIDATION_SECRET` | `${SHOPIFY_REVALIDATION_SECRET}` | ✅ Set |
| `SHOPIFY_WEBHOOK_SECRET` | `${SHOPIFY_WEBHOOK_SECRET}` | ⚠️ **REQUIRED FOR WEBHOOKS** |
| `RESEND_API_KEY` | `${RESEND_API_KEY}` | ⚠️ **REQUIRED FOR CONTACT FORM** |

## 🚀 Deploy to Production

Once you've fixed the environment variable, run:

```bash
cd /path/to/your/project
vercel --prod
```

This will:
1. Build your Next.js app
2. Connect to Shopify using the correct credentials
3. Deploy to production
4. Provide you with a live URL

## 📋 Environment Variables Template

Set these in your Vercel project settings (NOT in your code):

```bash
SHOPIFY_STORE_DOMAIN=${SHOPIFY_STORE_DOMAIN}
SHOPIFY_STOREFRONT_ACCESS_TOKEN=${SHOPIFY_STOREFRONT_ACCESS_TOKEN}
SHOPIFY_REVALIDATION_SECRET=${SHOPIFY_REVALIDATION_SECRET}
SHOPIFY_WEBHOOK_SECRET=8a6d6c504c9e32691111890657515ce4d6a2375d34198bda930f024f498a040c
RESEND_API_KEY=${RESEND_API_KEY}
```

## 🎉 After Deployment

Once deployed successfully, you'll get a URL like:
- `https://findsofallkindssite-xxx.vercel.app`
- Or your custom domain if configured

You can then:
1. **Test the site** - Browse products, add to cart, checkout
2. **Set up custom domain** - Go to Settings > Domains
3. **Enable Analytics** - In Vercel dashboard
4. **Configure GitHub integration** - Auto-deploy on git push

## ❓ Troubleshooting

If the build fails again:
1. Check that `SHOPIFY_STORE_DOMAIN` = `1wx8z0-0i.myshopify.com` (without quotes)
2. Verify the access token is correct
3. Ensure Shopify store is active and accessible
4. Check that products/collections exist in your Shopify store

## ℹ️ Next Steps After Deployment

- [ ] Visit the live URL and test the site
- [ ] Verify products display correctly
- [ ] Test add-to-cart functionality
- [ ] Test checkout process
- [ ] Configure custom domain (if desired)
- [ ] Set up analytics
- [ ] Configure error tracking (optional)
