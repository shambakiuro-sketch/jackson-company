# Jackson Construction Co., Inc. - Website

A professional, responsive website for Jackson Construction built with Next.js.

## Features

✅ **Responsive Design** - Mobile-first, works on all devices
✅ **Professional Layout** - Hero, About, Services, Portfolio, Contact sections
✅ **Contact Form** - Easy-to-use form for client inquiries
✅ **Fast Performance** - Built with Next.js for optimal speed
✅ **Easy to Deploy** - One-click deployment to Vercel
✅ **SEO Friendly** - Optimized for search engines

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or extract the project**
   ```bash
   cd jackson-construction
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Customization

### Update Company Information
Edit `app/components/Contact.js` to update:
- Phone number
- Email address
- Business address
- Business hours

### Update Services
Edit `app/components/Services.js` to add/modify services offered.

### Update About Section
Edit `app/components/About.js` to add company description and image.

### Update Portfolio
Edit `app/components/Portfolio.js` to add project titles and images.

### Change Colors/Branding
Edit `app/globals.css` color variables:
```css
:root {
  --primary-dark: #2c3e50;
  --primary-medium: #34495e;
  --accent-blue: #3498db;
  --accent-warm: #d4a574;
  /* ... other colors */
}
```

## Contact Form Setup

The contact form currently logs submissions to the console. To enable email notifications:

### Option 1: Using Nodemailer (Gmail)
1. Set up environment variables:
   ```
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-gmail-app-password
   ```

2. Uncomment and configure the email code in `app/api/contact/route.js`

### Option 2: Using SendGrid
1. Get a SendGrid API key from [sendgrid.com](https://sendgrid.com)
2. Add environment variable: `SENDGRID_API_KEY=your-key`
3. Update the contact route to use SendGrid

### Option 3: Using Formspree or similar service
Update the form submission in `app/components/Contact.js` to post to an external service.

## Deployment to Vercel

### One-Click Deploy

1. Push your code to GitHub/GitLab
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and select your repository
4. Click "Deploy"

### Manual Deployment

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts

## Build & Deploy Commands

```bash
# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## File Structure

```
jackson-construction/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js          # Contact form API
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Portfolio.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── globals.css               # All styling
│   ├── layout.js                 # Root layout
│   └── page.js                   # Home page
├── package.json
├── next.config.js
└── README.md
```

## Technology Stack

- **Framework**: Next.js 14
- **Frontend**: React 18
- **Styling**: CSS3
- **Deployment**: Vercel
- **API**: Next.js API Routes

## Mobile First

The website is optimized for mobile devices first. Responsive breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Performance Tips

1. **Add Real Images**: Replace placeholder images with actual project photos for better engagement
2. **Add More Content**: Expand services, add testimonials, include team bios
3. **SEO Optimization**: Update meta descriptions and add open graph tags
4. **Analytics**: Add Google Analytics to track visitor behavior
5. **Email Integration**: Set up proper email notifications for form submissions

## Support & Updates

For questions or updates needed:
1. Update content in the respective component files
2. Test locally with `npm run dev`
3. Deploy to production with `vercel`

## License

© 2024 Jackson Construction Co., Inc. All rights reserved.
