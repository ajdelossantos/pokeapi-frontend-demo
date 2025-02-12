import type { NextConfig } from "next";

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const nextConfig: NextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/PokeAPI/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
