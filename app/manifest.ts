import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vediq Biryani',
    short_name: 'Vediq Biryani',
    description: 'Authentic royal Awadhi & 100% Satvik Jain slow-cooked clay handi biryani delivery.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F1410',
    theme_color: '#C59A3F',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
