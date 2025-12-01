/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development
  reactStrictMode: true,
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      '@react-three/fiber',
      '@react-three/drei',
      '@react-three/rapier',
      '@react-three/postprocessing',
      'three',
      'react-icons',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-toast',
      '@radix-ui/react-tooltip',
      'lucide-react',
    ],
  },
  
  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Webpack optimizations
  webpack: (config, { isServer }) => {
    // Optimize Three.js bundle
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'three': 'three/src/Three.js',
      };
    }
    return config;
  },
  
  // Headers for caching
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;