# SEO Launch Checklist

## Canonical Domain

- Purchase the final domain.
- Set `NEXT_PUBLIC_SITE_URL` to the full HTTPS domain in Vercel Production.
- Add the domain to the Vercel project and redirect alternate domains to it.
- Redeploy and confirm canonical tags, Open Graph URLs, `robots.txt`, and
  `sitemap.xml` use the final domain.

## Google Search Console

- Add a Domain property for the final domain.
- Verify ownership with the DNS TXT record supplied by Google.
- Submit `https://<domain>/sitemap.xml`.
- Inspect the homepage, services page, portfolio page, and each project page.
- Request indexing after the canonical domain deployment is live.
- Check indexing, Core Web Vitals, search queries, impressions, and clicks
  monthly.

## Google Business Profile

- Create a service-area Business Profile for Clack Web Co.
- Hide the home address.
- Add only the towns, cities, or postcodes where in-person work is genuinely
  available.
- Use the same business name, phone number, website, and description everywhere.
- Add the headshot, project imagery, services, and opening/contact hours.
- Request genuine reviews from completed clients and respond to each review.

## Validation

- Test structured data with Google's Rich Results Test.
- Confirm Production allows indexing and Vercel Preview deployments do not.
- Run Lighthouse on mobile for SEO, accessibility, performance, and best
  practices.
- Replace the remote Jude C Fitness preview URL with a checked-in screenshot
  when a reliable homepage capture is available.
