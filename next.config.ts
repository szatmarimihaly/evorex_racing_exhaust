// next.config.ts
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
    images: {
        remotePatterns : [
            {
                protocol : 'https',
                hostname: 'adkfyqmshftyseghdnai.supabase.co',
                port: '',
                pathname:'/storage/v1/object/public/**'
            }
        ]
    }
};

export default withNextIntl(nextConfig);
