# Aphorium - Modern Blogging Platform

A modern blogging platform built with Next.js, Prisma, and NextAuth.js.

## Features

- Modern UI with Tailwind CSS
- Authentication with NextAuth.js
- Database integration with Prisma
- Responsive design
- Blog post management
- User profiles

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/aphorium.git
cd aphorium
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory with the following variables:

```
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/aphorium?schema=public"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-key-change-this-in-production"

# OAuth Providers
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

4. Set up the database:

```bash
npx prisma migrate dev --name init
```

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Setting up OAuth Providers

### Google

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Navigate to "APIs & Services" > "Credentials"
4. Click "Create Credentials" > "OAuth client ID"
5. Set the application type to "Web application"
6. Add "http://localhost:3000" to the authorized JavaScript origins
7. Add "http://localhost:3000/api/auth/callback/google" to the authorized redirect URIs
8. Copy the Client ID and Client Secret to your `.env` file

## Database Schema

The database schema includes the following models:

- User: Stores user information
- Account: Stores OAuth account information
- Session: Stores user sessions
- VerificationToken: Stores verification tokens for email verification
- Post: Stores blog posts
- Tag: Stores post tags
- Comment: Stores post comments

## License

This project is licensed under the MIT License.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
