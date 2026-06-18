# Small Business Website Builder

Professional website for selling small business website services to local business owners.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Contentful
- Formspree
- Vercel

## Environment Variables

Create `.env.local` with:

```bash
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=<your_space_id>
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=<your_access_token>
NEXT_PUBLIC_FORMSPREE_FORM_ID=<your_form_id>
```

The site includes fallback content, so it can run before Contentful and Formspree are configured.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Pages

- `/` - Home
- `/portfolio` - Portfolio listing
- `/portfolio/[slug]` - Individual project
- `/pricing` - Services and pricing
- `/about` - About/story
- `/contact` - Lead capture form

## Deployment

Deploy to Vercel with:

```bash
npm run build
```

Auto-deployment can be configured on push to the `main` branch.
