import path from "node:path";
import { PHASE_PRODUCTION_BUILD } from "next/constants.js";

const createNextConfig = (phase) => ({
  outputFileTracingRoot: path.join(process.cwd()),
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true,
    ...(phase === PHASE_PRODUCTION_BUILD
      ? { tsconfigPath: "tsconfig.build.json" }
      : {})
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
  }
});

export default createNextConfig;
