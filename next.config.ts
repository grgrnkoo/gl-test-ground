import type { NextConfig } from 'next'
import type { Configuration } from 'webpack'

const nextConfig: NextConfig = {
  webpack(config: Configuration) {
    config.module?.rules?.push({
      test: /\.(glsl|vs|fs)$/,
      use: ['raw-loader'],
    })
    return config
  },
}

export default nextConfig
// This Next.js configuration file adds a custom Webpack rule to handle GLSL shader files.