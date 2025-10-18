# Email Setup Guide - Resend Configuration

## 🔧 **REQUIRED SETUP**: Contact Form Email Integration

The contact form has been implemented with Resend email service. To make it functional, you need to complete these setup steps:

---

## 📧 **Step 1: Create Resend Account**

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (up to 3,000 emails/month free)
3. Verify your email address

---

## 🔑 **Step 2: Get Your API Key**

1. Log into your Resend dashboard
2. Go to **API Keys** section
3. Click **"Create API Key"**
4. Name it: `Finds of All Kinds Contact Form`
5. Copy the generated key (starts with `re_`)

---

## 🌐 **Step 3: Configure Domain (Optional but Recommended)**

### Option A: Use Your Own Domain (Recommended)
1. In Resend dashboard, go to **Domains**
2. Click **"Add Domain"**
3. Add your domain: `findsofallkinds.store`
4. Follow DNS verification steps
5. Once verified, emails will come from `contact@findsofallkinds.store`

### Option B: Use Resend's Domain (Quick Start)
- No setup needed
- Emails will come from `contact@yourdomain.onmicrosoft.com`
- May have lower deliverability

---

## ⚙️ **Step 4: Add Environment Variable**

### Via Vercel Dashboard (Recommended):
1. Go to your project in Vercel dashboard
2. Settings → Environment Variables
3. Add new variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_YourActualAPIKey` (paste your key)
   - **Environments**: Production, Preview, Development

### Via Vercel CLI:
```bash
cd /Users/mjduvall/commerce/commerce
vercel env add RESEND_API_KEY
# Paste your API key when prompted
```

### For Local Development:
Create `.env.local` file in your project root:
```bash
echo "RESEND_API_KEY=re_YourActualAPIKey" >> .env.local
```

---

## 🧪 **Step 5: Test the Contact Form**

1. Redeploy your site: `vercel --prod`
2. Visit your contact page: `https://yoursite.vercel.app/contact`
3. Fill out and submit the form
4. Check your email at `info@findsofallkinds.store`

---

## 📋 **Current Environment Variables Status**

| Variable Name | Status | Purpose |
|---|---|---|
| `SHOPIFY_STORE_DOMAIN` | ✅ Set | Store connection |
| `SHOPIFY_STOREFRONT_ACCESS_TOKEN` | ✅ Set | Product data |
| `SHOPIFY_REVALIDATION_SECRET` | ✅ Set | Cache updates |
| `RESEND_API_KEY` | ❌ **NEEDS SETUP** | **Contact form emails** |

---

## 🚨 **Troubleshooting**

### Contact Form Shows Error:
- **"Email service is not configured"** → `RESEND_API_KEY` not set
- **"Failed to send email"** → Invalid API key or domain not verified

### Email Not Received:
1. Check spam folder
2. Verify `info@findsofallkinds.store` email exists
3. Check Resend dashboard logs
4. Ensure domain is verified (if using custom domain)

### Development Testing:
```bash
# Test locally
cd /Users/mjduvall/commerce/commerce
pnpm dev
# Visit http://localhost:3000/contact
```

---

## 💡 **Email Configuration Details**

**Current Setup**:
- **From**: `Contact Form <contact@findsofallkinds.store>`
- **To**: `info@findsofallkinds.store`
- **Reply-To**: Customer's email (so you can reply directly)
- **Format**: Professional HTML with customer details

**What Customers Get**:
- Immediate confirmation message on form submission
- Professional "We'll get back to you" message

**What You Get**:
- Email with customer's name, email, subject, and message
- Nicely formatted HTML email
- Ability to reply directly to customer

---

## 🎯 **Next Steps After Setup**

1. ✅ Complete Resend account setup
2. ✅ Add `RESEND_API_KEY` to Vercel
3. ✅ Redeploy site
4. ✅ Test contact form
5. 🎉 Start receiving customer inquiries!

---

**Need Help?** The contact form will gracefully handle missing configuration and show appropriate error messages to guide users to contact you directly.