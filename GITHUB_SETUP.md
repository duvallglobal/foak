# GitHub Repository Setup Guide

## Step 1: Create a New GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Fill in the repository details:
   - **Repository name:** `finds-of-all-kinds-south` (or your preferred name)
   - **Description:** "E-commerce storefront for Finds of all Kinds - South, powered by Next.js and Shopify"
   - **Visibility:** Public (recommended for portfolio) or Private (for internal use)
   - **Initialize repository:** Leave unchecked (we have an existing local repo)

3. Click "Create repository"

## Step 2: Update Git Remote

After creating your new repository, update your local repository to point to it:

```bash
# Remove the old Vercel Commerce remote
git remote remove origin

# Add your new repository as the origin
git remote add origin https://github.com/YOUR_USERNAME/finds-of-all-kinds-south.git

# Rename the default branch if needed (GitHub uses 'main' by default)
git branch -M main

# Push your local commits to the new repository
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Step 3: Configure GitHub Repository Settings

### Branch Protection Rules (Optional but Recommended)

1. Go to repository Settings → Branches
2. Click "Add rule" under "Branch protection rules"
3. Configure:
   - **Branch name pattern:** `main`
   - **Require pull request reviews before merging:** Enable
   - **Require status checks to pass:** Enable
   - **Require branches to be up to date:** Enable

### Add Topics (for discoverability)

Go to Settings and add topics like:
- `ecommerce`
- `nextjs`
- `shopify`
- `react`
- `tailwindcss`

## Step 4: Set Up Deployment

### Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure environment variables:
   - `COMPANY_NAME`
   - `SITE_NAME`
   - `SHOPIFY_STORE_DOMAIN`
   - `SHOPIFY_STOREFRONT_ACCESS_TOKEN`
   - `SHOPIFY_REVALIDATION_SECRET`
5. Click "Deploy"

### Configure Custom Domain

1. In Vercel project settings, go to "Domains"
2. Add your custom domain (if you have one)
3. Update DNS records according to Vercel's instructions

## Next Steps

After setting up the GitHub repository:

1. ✅ Continue with customization tasks in the todo list
2. ✅ Set up color scheme and styling
3. ✅ Create custom logo and favicon
4. ✅ Customize homepage content
5. ✅ Update footer information
6. ✅ Add about and contact pages

## Useful Commands

```bash
# View commit history
git log --oneline

# Check remote configuration
git remote -v

# Push changes to GitHub
git push origin main

# Create a new branch for features
git checkout -b feature/my-new-feature

# Create a pull request (via GitHub UI or CLI)
gh pr create --title "Your PR title" --body "PR description"
```

## Resources

- [GitHub Docs](https://docs.github.com)
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Shopify Developer Docs](https://shopify.dev/docs)
