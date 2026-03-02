# Next.js + Vercel Deployment Guide

A comprehensive documentation site built with [Mintlify](https://mintlify.com/) that covers how to build and deploy a Next.js application using Vercel.

## 📚 Documentation Topics

1. **Introduction** — Overview, prerequisites, and technology stack
2. **Creating a Next.js Application** — Scaffolding with `create-next-app`, project structure, and first edits
3. **Setting Up a GitHub Repository** — Git initialization, remote setup, and best practices
4. **Connecting to Vercel** — Importing repos, auto-detection, and deployment model
5. **Managing Environment Variables** — `.env` files, `NEXT_PUBLIC_` prefix, and Vercel dashboard
6. **Deployment Steps** — Auto-deployments, preview URLs, custom domains, rollbacks, and monitoring

## 🚀 Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Start the Mintlify development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the documentation locally.

### Deploy on Vercel

1. Push this repository to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel will auto-detect Mintlify and deploy

## 🛠 Built With

- [Mintlify](https://mintlify.com/) — Documentation framework
- [MDX](https://mdxjs.com/) — Markdown with JSX components
- [Vercel](https://vercel.com/) — Hosting and deployment

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
