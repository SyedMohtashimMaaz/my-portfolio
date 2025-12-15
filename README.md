# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Showcasing projects, skills, and experience in machine learning and software development.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Built-in dark mode support
- **Fast Performance**: Optimized with Next.js for excellent performance
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Smooth Animations**: Framer Motion animations for engaging user experience

## 🛠️ Technologies Used

- **Next.js 14** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/SyedMohtashimMaaz/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🚢 Deployment to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

### Steps:

1. **Push your code to GitHub** (if not already done):
```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

2. **Import your repository to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your `my-portfolio` repository
   - Vercel will automatically detect Next.js and configure settings

3. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete
   - Your portfolio will be live at `your-portfolio.vercel.app`

4. **Custom Domain (Optional)**:
   - Go to your project settings on Vercel
   - Navigate to "Domains"
   - Add your custom domain

### Automatic Deployments

Vercel automatically deploys your site whenever you push to the main branch. Every push creates a new deployment preview.

## 📝 Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update name, title, and description

2. **About Section** (`components/About.tsx`):
   - Update the about me text

3. **Skills Section** (`components/Skills.tsx`):
   - Add or modify skill categories and technologies

4. **Projects Section** (`components/Projects.tsx`):
   - Add your projects to the `projects` array
   - Update GitHub URLs and project descriptions

5. **Contact Section** (`components/Contact.tsx`):
   - Update email address
   - Update LinkedIn profile URL
   - Configure contact form (currently uses alert, integrate with email service)

6. **Footer** (`components/Footer.tsx`):
   - Update social media links

7. **Metadata** (`app/layout.tsx`):
   - Update page title and description

### Adding a Resume

1. Place your resume PDF in the `public` folder
2. Update the resume link in `components/Hero.tsx`:
```tsx
href="/resume.pdf"
```

### Styling

- Colors can be customized in `tailwind.config.js`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind utility classes

## 📄 Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects section
│   └── Contact.tsx         # Contact section
├── public/                 # Static assets
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── tailwind.config.js      # Tailwind config
└── next.config.js          # Next.js config
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Features to Add

- [ ] Blog section
- [ ] Project filtering/tags
- [ ] Contact form backend integration
- [ ] Analytics integration
- [ ] RSS feed
- [ ] Sitemap generation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Syed Mohtashim Maaz**

- GitHub: [@SyedMohtashimMaaz](https://github.com/SyedMohtashimMaaz)
- Portfolio: [Your Portfolio URL]

---

Made with ❤️ using Next.js and Tailwind CSS

