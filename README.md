# Real Estate Figma Clone

A pixel-perfect React real estate property listing application built with Vite, React Router, Firebase Authentication, and TailwindCSS.

![Real Estate App](/screenshots/home.png)

## Features

- **Property Listings**: Dynamic property listings fetched from API with client-side filtering
- **Authentication**: Firebase email/password authentication with protected routes
- **Responsive Design**: Mobile-first responsive layout with TailwindCSS
- **Property Search**: Filter properties by sale/rent type and search by city/country
- **Featured Properties**: Highlighted properties on the home page
- **Newsletter Subscription**: Mock newsletter subscription form

## Tech Stack

- **Frontend**: React (Vite), React Router, TailwindCSS
- **Authentication**: Firebase Authentication (email/password)
- **State Management**: Context API
- **Data Fetching**: Fetch API
- **Deployment**: Vercel or Netlify

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd real-estate-figma-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Add a new web app to your Firebase project
4. Enable Email/Password authentication in the Authentication section
5. Copy your Firebase configuration values to `.env` file

### Environment Variables

Create a `.env` file in the root directory and add your configuration:

```env
VITE_API_BASE=https://68b826bcb715405043274639.mockapi.io/api/properties
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Development

Start the development server:

```bash
npm run dev
```

### Build

Build the application for production:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Deployment

### Vercel

1. Push your code to a Git repository
2. Go to [Vercel](https://vercel.com/) and create a new project
3. Connect your Git repository
4. Set the build command to `npm run build`
5. Set the output directory to `dist`
6. Add environment variables from your `.env` file
7. Deploy!

### Netlify

1. Push your code to a Git repository
2. Go to [Netlify](https://netlify.com/) and create a new site
3. Connect your Git repository
4. Set the build command to `npm run build`
5. Set the publish directory to `dist`
6. Add environment variables from your `.env` file
7. Add a redirect rule for React Router:
   Create a `_redirects` file in the `public` directory with:
   ```
   /* /index.html 200
   ```
8. Deploy!

## Project Structure

```
real-estate-figma-clone/
├─ index.html
├─ package.json
├─ vite.config.js
├─ postcss.config.js
├─ tailwind.config.js
├─ .gitignore
├─ .env.example
├─ README.md
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ index.css
   ├─ router.jsx
   ├─ assets/
   │  └─ hero.jpg
   ├─ components/
   │  ├─ Navbar.jsx
   │  ├─ Footer.jsx
   │  ├─ Hero.jsx
   │  ├─ WhatWeDo.jsx
   │  ├─ PropertyCard.jsx
   │  ├─ PropertyGrid.jsx
   │  ├─ FilterBar.jsx
   │  ├─ Newsletter.jsx
   │  └─ ProtectedRoute.jsx
   ├─ pages/
   │  ├─ HomePage.jsx
   │  ├─ PropertyListingPage.jsx
   │  ├─ LoginPage.jsx
   │  ├─ SignupPage.jsx
   │  └─ ProfilePage.jsx
   ├─ context/
   │  └─ AuthContext.jsx
   ├─ services/
   │  ├─ api.js
   │  └─ firebase.js
   └─ utils/
      └─ validators.js
```

## Screenshots

![Home Page](/screenshots/home.png)
*Home Page*

![Property Listings](/screenshots/listings.png)
*Property Listings Page*

![Login Page](/screenshots/login.png)
*Login Page*

![Profile Page](/screenshots/profile.png)
*Profile Page*

## Demo

[View Demo Video](https://example.com/demo-video)

## License

MIT License

Copyright (c) 2023 Real Estate Figma Clone

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.