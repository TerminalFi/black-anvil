# Deployment Guide

## Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# CrispForms endpoint (Required)
# Get your form endpoint at: https://crispforms.com/
NEXT_PUBLIC_CRISPFORMS_ENDPOINT=https://crispforms.com/api/forms/your_form_id

# reCAPTCHA v3 keys (Optional - provides additional spam protection)
# Get your keys at: https://www.google.com/recaptcha/admin
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Production Build

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
This is a standard Next.js 16 application and can be deployed to:
- Netlify
- AWS Amplify
- Azure Static Web Apps
- Self-hosted with PM2 or Docker

## Post-Deployment Tasks

1. **Set up CrispForms**:
   - Sign up at [CrispForms](https://crispforms.com/)
   - Create a new form for contact submissions
   - Configure form fields (name, email, company, message)
   - Copy your form endpoint URL
   - Add the endpoint to your environment variables
   - Configure email notifications and integrations

2. **(Optional) Set up reCAPTCHA**:
   - Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
   - Create a new site with reCAPTCHA v3
   - Add your domain to the allowed domains
   - Copy the site key and secret key to your environment variables
   - This provides an additional layer of spam protection

3. **Update Content**:
   - Edit `app/page.tsx` to customize services, about section, and other content
   - Update meta tags in `app/layout.tsx` for SEO
   - Customize colors in `tailwind.config.ts`

4. **Set up Analytics** (optional):
   - Add Google Analytics
   - Add performance monitoring
   - Set up error tracking (Sentry, etc.)

## Troubleshooting

### Build fails
- Make sure Node.js version is 18 or higher
- Delete `node_modules` and `.next` folders and reinstall: `rm -rf node_modules .next && npm install`

### Contact form not working
- Check that environment variables are set correctly
- Verify reCAPTCHA keys are valid
- Check browser console for errors

### Styling issues
- Clear browser cache
- Rebuild the project: `npm run build`
- Check that Tailwind CSS is configured correctly in `postcss.config.mjs`
