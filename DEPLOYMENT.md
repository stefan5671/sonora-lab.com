# Deployment Options for Sonora Lab

This document outlines different deployment options, especially for private repositories.

## Option 1: GitHub Pages (Public Repos or Paid GitHub)

**Requirements:**
- Public repository, OR
- GitHub Pro/Team/Enterprise account for private repos

**Status:** Already configured via `.github/workflows/deploy.yml`

**URL:** `https://stefan5671.github.io/sonora-lab.com/`

---

## Option 2: Vercel (Recommended for Private Repos)

Vercel supports **private repos on free accounts** and has excellent Next.js support.

### Setup Steps:

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with your GitHub account
3. Click "New Project"
4. Import your `sonora-lab.com` repository (public or private)
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

**Benefits:**
- ✅ Works with private repos on free plan
- ✅ Automatic deployments on push
- ✅ Preview deployments for branches
- ✅ Fast global CDN
- ✅ Zero configuration needed

**URL:** You'll get a custom `.vercel.app` domain (can add custom domain)

---

## Option 3: Netlify

Netlify also supports private repos on free accounts.

### Setup Steps:

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with your GitHub account
3. Click "Add new site" → "Import an existing project"
4. Choose your repository
5. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
6. Click "Deploy"

**Benefits:**
- ✅ Works with private repos on free plan
- ✅ Automatic deployments
- ✅ Form handling & serverless functions
- ✅ Custom domains

---

## Option 4: Self-Hosted

### Build and Deploy Manually:

```bash
# Build the static site
npm run build

# The output is in the 'out' directory
# Upload the 'out' folder to any static hosting:
# - AWS S3
# - DigitalOcean Spaces
# - Your own server
```

---

## Recommendation

**For private repos with sensitive assets:**

1. **Best:** Vercel (easiest, best Next.js integration)
2. **Alternative:** Netlify (also great, more features)
3. **Fallback:** Self-host or wait until GitHub Pro

**For public repos:**
- GitHub Pages (already configured) works perfectly!

---

## Current Configuration

This project is configured for:
- ✅ GitHub Pages (via GitHub Actions)
- ✅ Vercel (via `vercel.json`)
- ✅ Static export (works anywhere)

You can deploy to multiple platforms simultaneously if needed!
