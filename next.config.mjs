/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  /** Prevents webpack from bundling libsql (avoids sync imports of README/LICENSE in node_modules). */
  serverExternalPackages: [
    '@libsql/client',
    '@libsql/kysely-libsql',
    'kysely',
    'better-auth',
  ],
  experimental: {
    esmExternals: true,
  },
};

export default nextConfig;
