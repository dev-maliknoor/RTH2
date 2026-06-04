# 🚀 RTH Foods BB1 LTD - Deployment & Local Run Guide

This project is a premium, highly interactive static React 19 + Tailwind 4 application. It is fully optimized for **Vercel** deployment and local development using standard **npm** scripts.

---

## 💻 Local Development

Follow these simple steps to run the website on your local machine:

1. **Extract the ZIP File**:
   Extract the contents of the zip file into a folder of your choice.

2. **Install Dependencies**:
   Open your terminal, navigate to the project folder, and run:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   Start the local development server:
   ```bash
   npm run dev
   ```
   This will start the site at `http://localhost:3000`.

4. **Build for Production**:
   To test the production build locally:
   ```bash
   npm run build
   npm run preview
   ```

---

## ☁️ Deploy to Vercel

You can deploy this website to Vercel in under 1 minute with **zero configuration**:

### Option 1: Vercel CLI (Fastest)
1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Run the deploy command inside the project folder:
   ```bash
   vercel
   ```
3. Follow the on-screen prompts to log in and link your project. Vercel will automatically detect the Vite build settings and deploy!

### Option 2: Vercel Dashboard (GitHub)
1. Push this project folder to a new **GitHub, GitLab, or Bitbucket** repository.
2. Go to the [Vercel Dashboard](https://vercel.com/) and click **Add New > Project**.
3. Import your repository.
4. Vercel will automatically detect **Vite** as the framework:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**!

---

## 🎨 Core Features Included
- **Custom Parallax Hero**: Stunning, multi-layered scroll-based banner on the homepage.
- **Scroll-Parallax Service Banners**: All service page banners smoothly move and zoom on scroll.
- **Floating 3D Assets**: Roasted coffee beans, fresh mint leaves, and spices floating elegantly in the background.
- **Interactive Cursor**: Custom responsive fluid-lag cursor.
- **Magnetic Buttons**: Interactive cursor attraction effects on all major call-to-actions.
- **Aesthetic Grid Layouts**: Clean, side-by-side storytelling grids inspired by Bidfood & Brakes.
- **Complete Page Architecture**: Redesigned About, Contact (updated timings), FAQ, Gallery, and Projects pages.
- **Fully Responsive**: Flawless experience across mobile, tablet, and desktop devices.
