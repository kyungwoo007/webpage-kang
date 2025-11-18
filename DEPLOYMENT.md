# Deployment Guide

## Quick Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. Visit [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import `kyungwoo007/webpage-kang` repository
5. Vercel will auto-detect Next.js configuration
6. Click "Deploy"

Your website will be live at: `https://webpage-kang.vercel.app`

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd professor-website
vercel

# For production
vercel --prod
```

## Environment Setup

No environment variables are required for basic functionality.

### Optional: Email Service (for Contact Form)

To enable email notifications from the contact form, add these variables in Vercel dashboard:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
RECIPIENT_EMAIL=kkw@hanyang.ac.kr
```

Then update `app/api/contact/route.ts` to use these credentials.

## Custom Domain (Optional)

1. In Vercel Dashboard, go to Project Settings
2. Navigate to "Domains"
3. Add your custom domain (e.g., `professor-kang.hanyang.ac.kr`)
4. Follow DNS configuration instructions
5. Vercel will auto-provision SSL certificate

## Build Configuration

The project uses these build settings:

- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node Version**: 18.x or higher

## Performance Optimizations

Already implemented:
- ✅ Static page generation for faster loads
- ✅ Image optimization with Next.js Image component
- ✅ CSS purging with Tailwind
- ✅ Code splitting and lazy loading
- ✅ SEO metadata and OpenGraph tags

## Monitoring

After deployment, you can:
1. View analytics in Vercel Dashboard
2. Monitor build logs
3. Set up error tracking (Sentry, etc.)
4. Configure email alerts for build failures

## Updating the Website

To update content after deployment:

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update: your changes"
   git push
   ```
3. Vercel will automatically rebuild and redeploy

## Rollback

If you need to rollback:
1. Go to Vercel Dashboard
2. Navigate to "Deployments"
3. Find the previous stable deployment
4. Click "Promote to Production"

## Support

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: https://github.com/kyungwoo007/webpage-kang/issues

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test language switching (EN ⟷ KO)
- [ ] Confirm publications filtering works
- [ ] Test contact form submission
- [ ] Check mobile responsiveness
- [ ] Verify SEO metadata
- [ ] Test all internal links
- [ ] Confirm Google Maps embed works
- [ ] Update social media profile links
- [ ] Add actual professor profile photo
- [ ] Configure email service for contact form
