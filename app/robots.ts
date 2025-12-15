import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/', // Jeśli będziesz miał panel admina
        },
        sitemap: 'https://mfk-consulting.pl/sitemap.xml',
    };
}