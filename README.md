# Clack Web Co.

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
NEXT_PUBLIC_SITE_URL=<your_canonical_site_url>
```

The site includes fallback content, so it can run before Contentful and Formspree are configured.

## Feature Flags

The pricing page and all pricing links use the boolean Vercel Flag
`pricing-page`. It defaults to hidden when Vercel Flags is not configured.

Create `pricing-page` in the Vercel project, then pull the Vercel-managed
`FLAGS` and `FLAGS_SECRET` variables for local Flags Explorer support:

```bash
vercel env pull
```

Flag definitions are exposed to Vercel Flags Explorer through
`/.well-known/vercel/flags`.

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
