# Quick Start Guide - Professor K. Kang Website

## 🚀 Live Preview

**Development Server (Active Now):**  
https://3000-i4psw58eud0ehmyse19wh-8f57ffe2.sandbox.novita.ai

**Available Pages:**
- Home: `/en` or `/ko`
- About: `/en/about` or `/ko/about`
- Publications: `/en/publications` or `/ko/publications`
- Contact: `/en/contact` or `/ko/contact`

---

## 📦 What's Been Built

### ✅ Complete Features
1. **Bilingual Website** (English & Korean)
2. **322 Publications** with advanced filtering
3. **4 Main Pages** (Home, About, Publications, Contact)
4. **Responsive Design** (Mobile, Tablet, Desktop)
5. **Professional UI** with Hanyang University branding
6. **SEO Optimized** for search engines
7. **Contact Form** with validation
8. **Navigation** with language toggle

---

## 🎯 Deploy to Vercel (5 Minutes)

### Step 1: Visit Vercel
Go to: https://vercel.com/new

### Step 2: Sign In
Sign in with your GitHub account (kyungwoo007)

### Step 3: Import Repository
- Click "Import Project"
- Select `kyungwoo007/webpage-kang`
- Choose branch: `main` (after merging PR)

### Step 4: Configure
Vercel will auto-detect:
- Framework: Next.js ✅
- Build Command: `npm run build` ✅
- Output Directory: `.next` ✅

### Step 5: Deploy
Click "Deploy" button

### Step 6: Access Website
Your site will be live at:
```
https://webpage-kang.vercel.app
```

---

## 🔄 Before Deployment: Merge Pull Request

### Current Status
- ✅ Code committed to `genspark_ai_developer` branch
- ✅ Pull Request created: #1
- ⏳ Needs merge to `main` branch

### Merge Steps

1. **Visit Pull Request**
   - URL: https://github.com/kyungwoo007/webpage-kang/pull/1

2. **Review Changes**
   - Check all files modified
   - Review commit messages
   - Verify no conflicts

3. **Merge**
   - Click "Merge pull request"
   - Confirm merge
   - Delete `genspark_ai_developer` branch (optional)

4. **Verify**
   - Check `main` branch has all changes
   - Confirm latest commit

---

## 💻 Local Development

### Prerequisites
```bash
Node.js 18+ installed
Git installed
```

### Clone and Run
```bash
# Clone repository
git clone https://github.com/kyungwoo007/webpage-kang.git
cd webpage-kang

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Visit: http://localhost:3000/en
```

### Build for Production
```bash
npm run build
npm start
```

---

## 📝 Customize Content

### Update Translations
Edit files:
- `messages/en.json` - English content
- `messages/ko.json` - Korean content

### Add Publications
Edit `lib/data/publications.json`

### Change Colors
Edit `app/globals.css`:
```css
--primary: #003DA5;  /* Hanyang Blue */
--accent: #E31B23;   /* Hanyang Red */
```

### Update Contact Info
Edit `messages/en.json` and `messages/ko.json`:
```json
{
  "contact": {
    "email": "your-email@example.com",
    "phone": "your-phone-number"
  }
}
```

---

## 🖼️ Add Professor Photo

### Step 1: Prepare Image
- Format: JPG or PNG
- Size: 400x400 pixels recommended
- File size: < 200KB

### Step 2: Upload to Public Folder
```bash
# Place image in:
public/images/professor-kang.jpg
```

### Step 3: Update Home Page
Edit `app/[locale]/page.tsx`:
```tsx
// Replace placeholder with:
<Image 
  src="/images/professor-kang.jpg"
  alt="Professor K. Kang"
  width={192}
  height={192}
  className="rounded-full"
/>
```

---

## 📧 Configure Email Service

### Recommended: Resend (Free Tier)

1. **Sign up:** https://resend.com
2. **Get API Key**
3. **Add to Vercel:**
   - Go to Vercel Dashboard
   - Project Settings → Environment Variables
   - Add: `RESEND_API_KEY=your-key`

4. **Update API Route:**
Edit `app/api/contact/route.ts`

---

## 🔗 Add Social Media Links

Edit `components/Footer.tsx`:
```tsx
const socialLinks = [
  { 
    name: 'ResearchGate', 
    href: 'https://www.researchgate.net/profile/Your-Profile'
  },
  { 
    name: 'Google Scholar', 
    href: 'https://scholar.google.com/citations?user=YOUR_ID'
  },
  { 
    name: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/your-profile'
  },
];
```

---

## 📊 Monitor Performance

### After Deployment

1. **Vercel Analytics**
   - Auto-enabled
   - View in Vercel Dashboard

2. **Google Analytics** (Optional)
   - Get tracking ID
   - Add to `app/[locale]/layout.tsx`

3. **Performance Score**
   - Run Lighthouse audit
   - Target: 90+ score

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading
- Check file paths
- Verify images in `public/` folder
- Use absolute paths: `/images/file.jpg`

### Language Not Switching
- Clear browser cache
- Check middleware configuration
- Verify `messages/` folder has both `en.json` and `ko.json`

---

## 📞 Support

- **GitHub Issues:** https://github.com/kyungwoo007/webpage-kang/issues
- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs

---

## ✅ Post-Deployment Checklist

- [ ] Merge PR #1 to main branch
- [ ] Deploy to Vercel
- [ ] Test all pages work
- [ ] Verify language switching
- [ ] Test publications filtering
- [ ] Check mobile responsiveness
- [ ] Add professor photo
- [ ] Update contact information
- [ ] Add social media links
- [ ] Configure email service
- [ ] Set up custom domain (optional)
- [ ] Enable analytics

---

**Ready to Go Live! 🎉**

Your website is production-ready and can be deployed immediately.

*Last Updated: November 18, 2024*
