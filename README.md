# Identichat Website

AI-powered interactive video verification platform that completes KYC in 180 seconds with a 95% completion rate.

## Tech Stack

- **Framework:** Next.js 16.0.0 (React 19.2.0)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI (shadcn/ui)
- **Analytics:** Vercel Analytics
- **Hosting:** Firebase Hosting

## Getting Started

### Prerequisites

- Node.js 20.9.0 or higher
- npm or pnpm package manager
- Firebase CLI (for deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rony-rgb/Identichat.git
cd Identichat
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
```

This creates a static export in the `out` directory.

## Deploy to Google Firebase

### Prerequisites

1. A Google Firebase account ([console.firebase.google.com](https://console.firebase.google.com))
2. A Firebase project created (or use existing one)
3. Firebase CLI installed globally

### Step 1: Install Firebase CLI

```bash
npm install -g firebase-tools
```

### Step 2: Login to Firebase

```bash
firebase login
```

This will open your browser for authentication with your Google account.

### Step 3: Build the Application

```bash
npm run build
```

This generates a static export in the `out` directory that's ready for Firebase Hosting.

### Step 4: Configure Firebase (Already Done)

The project is already configured with:
- `firebase.json` - Firebase Hosting configuration
- `.firebaserc` - Project alias configuration

If you need to change the Firebase project, edit `.firebaserc`:
```json
{
  "projects": {
    "default": "your-project-id"
  }
}
```

### Step 5: Deploy to Firebase

```bash
firebase deploy
```

Your site will be deployed to:
- `https://[your-project-id].web.app`
- `https://[your-project-id].firebaseapp.com`

### Troubleshooting Firebase Deployment

#### Authentication Error
If you get `Authentication Error: Your credentials are no longer valid`, run:
```bash
firebase login --reauth
```

#### Site Name Error
If you encounter "resolving hosting target" errors, ensure `firebase.json` includes the site name:
```json
{
  "hosting": {
    "site": "your-site-name",
    "public": "out",
    ...
  }
}
```

#### Build Issues
Make sure you're using Node.js 20+:
```bash
node --version
```

If using nvm:
```bash
nvm use 20
```

### Custom Domain

To add a custom domain:
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Navigate to Hosting > Add custom domain
4. Follow the DNS configuration instructions

## Project Structure

```
Identichat/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── header.tsx
│   ├── hero.tsx
│   ├── features-section.tsx
│   └── ui/               # shadcn/ui components
├── public/               # Static assets
├── out/                  # Build output (generated)
├── firebase.json         # Firebase configuration
├── .firebaserc          # Firebase project settings
├── next.config.mjs      # Next.js configuration
└── package.json         # Dependencies

```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Configuration

### Next.js Configuration

The project uses static export mode for Firebase Hosting compatibility:

```javascript
// next.config.mjs
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}
```

### Firebase Hosting Configuration

```json
{
  "hosting": {
    "site": "identichat-website",
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## License

All rights reserved.

## Support

For issues or questions, please contact the development team or create an issue in the repository.
