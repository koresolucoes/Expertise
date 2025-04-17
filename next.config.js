const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'

const repo = isGitHubActions ? '/expertise' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: repo,
  assetPrefix: repo + '/',
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
}
/** @type {import('next').NextConfig} */
module.exports = nextConfig
