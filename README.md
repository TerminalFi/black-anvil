# Black Anvil

A modern, professional website built with Next.js 16 and Tailwind CSS v3.

## Features

- **Next.js 16** - Latest version with App Router
- **Tailwind CSS v3** - Modern utility-first CSS framework
- **TypeScript** - Type-safe development
- **reCAPTCHA v3** - Invisible spam protection for contact form
- **Responsive Design** - Mobile-first, works on all devices
- **Professional Design** - Muted, non-flashy colors for a business-focused aesthetic

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TerminalFi/black-anvil.git
   cd black-anvil
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Get your reCAPTCHA v3 keys from [Google reCAPTCHA](https://www.google.com/recaptcha/admin) and add them to `.env.local`:
   ```
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
   RECAPTCHA_SECRET_KEY=your_secret_key_here
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
black-anvil/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # Contact form API endpoint
│   ├── globals.css            # Global styles with Tailwind v4
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/
│   └── ContactForm.tsx        # Contact form component
├── public/                    # Static assets
├── .env.example               # Example environment variables
├── next.config.ts             # Next.js configuration
├── postcss.config.mjs         # PostCSS configuration for Tailwind
├── tailwind.config.ts         # Tailwind configuration
└── tsconfig.json              # TypeScript configuration
```

## Customization

### Colors

The color scheme is defined in `tailwind.config.ts` using a custom color palette extension. The current palette uses muted slate/grays for a professional look.

### Content

Edit `app/page.tsx` to update the content, services, and sections of the website.

### Contact Form

The contact form submission handler is in `app/api/contact/route.ts`. You can customize it to:
- Send emails via services like SendGrid or Resend
- Store submissions in a database
- Integrate with CRM systems

## License

See the [LICENSE](LICENSE) file for details.
