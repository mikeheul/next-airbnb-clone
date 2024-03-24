/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol:'https',
                hostname: 'avatars.githubusercontent.com'
            },
            {
                protocol:'https',
                hostname: 'lh3.googleusercontent.com'
            },
            {
                protocol:'https',
                hostname: 'res.cloudinary.com'
            },
            // "avatars.githubusercontent.com",
            // "lh3.googleusercontent.com"
        ]
    }
};

export default nextConfig;
