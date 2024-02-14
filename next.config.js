/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
    // 本番環境と開発環境で設定を別々にする
    output: isDev ? undefined : 'export',
}

module.exports = nextConfig
