# Deployment Guide

Your portfolio has been successfully pushed to GitHub: `https://github.com/arorakomal1406/komal-arora`

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is the easiest and fastest way to deploy your React portfolio with automatic deployments.

### Steps:

1. **Go to Vercel**: Visit https://vercel.com and sign up/login with your GitHub account

2. **Import Project**:
   - Click "Add New Project"
   - Select your repository: `arorakomal1406/komal-arora`
   - Vercel will auto-detect it's a Vite project

3. **Configure Settings**:
   - Framework Preset: Vite (should be auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `dist` (default for Vite)
   - Install Command: `npm install` (default)

4. **Deploy**:
   - Click "Deploy"
   - Wait 1-2 minutes for deployment
   - You'll get a live URL like: `https://komal-arora.vercel.app`

5. **Custom Domain (Optional)**:
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain if you have one

### Automatic Updates:
- Every time you push to GitHub, Vercel automatically redeploys your site!

---

## Option 2: Deploy to Netlify

Alternative hosting option with similar features.

### Steps:

1. **Go to Netlify**: Visit https://www.netlify.com and sign up/login with GitHub

2. **Import Project**:
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository: `arorakomal1406/komal-arora`

3. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Get Your Live URL**:
   - You'll get a URL like: `https://komal-arora.netlify.app`

---

## Option 3: GitHub Pages (More Setup Required)

If you prefer GitHub Pages, you'll need to:

1. Install GitHub Pages package: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Configure Vite for GitHub Pages
4. Deploy using: `npm run deploy`

---

## Quick Deploy Links:

- **Vercel**: https://vercel.com/new (Select your repo)
- **Netlify**: https://app.netlify.com/start (Connect GitHub)

---

## Notes:

- Your site will be live and accessible worldwide
- HTTPS is automatically enabled
- All changes pushed to GitHub will auto-deploy
- Free hosting with generous limits

**Recommended: Use Vercel for the easiest setup!**

