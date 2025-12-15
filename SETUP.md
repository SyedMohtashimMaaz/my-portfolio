# Portfolio Setup Guide

## Quick Start

1. **Install Node.js** (if not already installed):
   - Download from [nodejs.org](https://nodejs.org/)
   - Version 18+ recommended

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open browser**: Navigate to `http://localhost:3000`

## Customization Checklist

Before deploying, update these personal details:

### ✅ Required Updates

1. **Email Address** (3 places):
   - `components/Contact.tsx` - Line with `your.email@example.com`
   - `components/Footer.tsx` - Update mailto link
   - `components/Hero.tsx` - If you add email link

2. **LinkedIn Profile** (2 places):
   - `components/Contact.tsx` - Update LinkedIn URL
   - `components/Footer.tsx` - Update LinkedIn URL

3. **GitHub Username** (Already set to `SyedMohtashimMaaz` - verify it's correct)

4. **Personal Information**:
   - `components/Hero.tsx` - Update tagline/description
   - `components/About.tsx` - Update about me text
   - `app/layout.tsx` - Update meta description

5. **Resume PDF**:
   - Place your resume PDF in the `public/` folder
   - Name it `resume.pdf` (or update the link in `Hero.tsx`)

### 🎨 Optional Customizations

1. **Colors**: Edit `tailwind.config.js` to change the primary color scheme
2. **Add More Projects**: Edit `components/Projects.tsx` - add to the `projects` array
3. **Skills**: Edit `components/Skills.tsx` - modify skill categories
4. **Contact Form**: Integrate with a service like Formspree, EmailJS, or your own backend

## Deployment to Vercel

### Step 1: Push to GitHub

```bash
cd C:\Users\Maaz\Desktop\my-portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/SyedMohtashimMaaz/my-portfolio.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import `my-portfolio` repository
5. Click "Deploy" (settings are auto-detected)
6. Wait for deployment (usually 1-2 minutes)
7. Your portfolio is live! 🎉

### Step 3: Custom Domain (Optional)

1. In Vercel project settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Troubleshooting

### Port already in use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Module not found errors
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors
- Check that all dependencies are installed
- Verify TypeScript types are correct
- Check console for specific error messages

## Features Included

✅ Responsive design (mobile, tablet, desktop)
✅ Dark mode support
✅ Smooth scroll navigation
✅ Animated sections (Framer Motion)
✅ SEO optimized
✅ Fast performance
✅ Modern UI/UX

## Next Steps

1. ✅ Customize personal information
2. ✅ Add your resume PDF
3. ✅ Update social media links
4. ✅ Add more projects as you create them
5. ✅ Deploy to Vercel
6. ✅ Share your portfolio!

---

**Need help?** Check the main README.md or open an issue on GitHub.

