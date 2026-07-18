import path from "node:path";

const nextConfig = {
  outputFileTracingRoot: path.join(process.cwd()),
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true,
    tsconfigPath: "tsconfig.build.json"
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net"
      },
      {
        protocol: "https",
        hostname: "image.thum.io"
      }
    ]
  },
  turbopack: {
    root: path.join(process.cwd())
  }
};

export default nextConfig;
