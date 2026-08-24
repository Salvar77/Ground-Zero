import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.groundzero-niemodlin.pl';

  const routes = [
    '',
    '/o-nas',
    '/grafik',
    '/recovery-room',
    '/trenerzy',
    '/cennik',
    '/galeria',
    '/kontakt',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const legalRoutes = [
    '/polityka-prywatnosci',
    '/regulamin',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  return [...routes, ...legalRoutes];
}
