# Deployment Guide - Vercel

## Method 1: Deploy via GitHub (Recommended)

### Step 1: Push to GitHub

```bash
cd C:\Users\Maaz\Desktop\my-portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Portfolio ready for deployment"

# Add remote (create repo on GitHub first: https://github.com/new)
git remote add origin https://github.com/SyedMohtashimMaaz/my-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel Website

1. Go to **https://vercel.com**
2. **Sign in** with your GitHub account
3. Click **"Add New Project"** or **"Import Project"**
4. Select your **`my-portfolio`** repository
5. Vercel will auto-detect:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click **"Deploy"**
7. Wait 1-2 minutes
8. Your portfolio is live! 🎉

### Step 3: Get Your Live URL

After deployment, you'll get a URL like:
- `https://my-portfolio-xyz.vercel.app`

You can also add a custom domain in Vercel project settings.

---

## Method 2: Deploy via Vercel CLI

### Install Vercel CLI

```bash
npm install -g vercel
```

### Deploy

```bash
cd C:\Users\Maaz\Desktop\my-portfolio
vercel
```

Follow the prompts:
- Login to Vercel
- Link to existing project or create new
- Deploy!

### Production Deploy

```bash
vercel --prod
```

---

## Environment Variables (if needed)

If you add any environment variables later:
1. Go to Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy

---

## Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch = automatic production deployment
- Pull requests = preview deployments

---

## Troubleshooting

### Build Errors
- Check that all dependencies are in `package.json`
- Run `npm install` locally first
- Check build logs in Vercel dashboard

### Module Not Found
- Ensure all imports are correct
- Check file paths are correct
- Verify all dependencies are installed

### Deployment Fails
- Check Vercel build logs
- Ensure Node.js version is compatible (Vercel uses Node 18+ by default)
- Verify `package.json` scripts are correct

---

## Custom Domain Setup

1. Go to Vercel project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for DNS propagation (5-30 minutes)

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment

