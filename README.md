# Delivery App (React + Node.js)

Modern food delivery experience built with a Vite + React frontend and an Express/Mongo-ready backend. The app ships with sample data (including local images) so you can explore the UI without any external services, but it also supports plugging into a real MongoDB database when you are ready.

## ✨ Features
- 🍽️ Dynamic food catalog grouped by category with search
- 🛒 Client-side cart powered by a Context reducer
- 🔐 Auth scaffolding (login/signup screens ready for integration)
- 📦 Dual build: React frontend (`/`) and Express backend (`/backend`)
- 🖼️ Local image library stored in `public/images` with easy replacement guide
- 🧪 Sample data fallback if `MONGO_URI` is not provided

## 🧰 Tech Stack
- **Frontend:** React 18, Vite, TailwindCSS
- **State:** React Context + Reducer (`ContextReducer.jsx`)
- **Backend:** Node.js, Express, Mongoose-ready models
- **Tooling:** ESLint, PostCSS, Vite dev server

## 📂 Folder Structure
```
my-app/
├── public/                 # Static assets (local food images, test HTML)
├── src/                    # React components, screens, styles
├── backend/                # Express server, routes, Mongo models, sample data
├── package.json            # Frontend dependencies/scripts
└── backend/package.json    # Backend dependencies/scripts
```

## 🚀 Getting Started
### Prerequisites
- Node.js 18+
- npm 9+

### 1. Install dependencies
```bash
# Frontend
npm install

# Backend
cd backend
npm install
cd ..
```

### 2. Configure environment (optional)
Create `backend/.env` with:
```
MONGO_URI=your-mongodb-connection-string
```
If this file is missing, the backend automatically serves the sample data from `backend/sampleData.js`.

### 3. Run the app locally
Open two terminals:
```bash
# Terminal 1 – frontend
npm run dev

# Terminal 2 – backend
cd backend
npm start
```
Frontend: http://localhost:5173  
Backend API: http://localhost:5000

### 4. Replace food images (optional)
- Drop real JPG/PNG files into `public/images/` and keep the existing filenames (e.g., `pizza1.jpg`, `mangoshake.jpg`).
- Preview all images via `http://localhost:5173/test-images.html`.

## 📡 Available Scripts
| Location | Command | Description |
| --- | --- | --- |
| root | `npm run dev` | Start Vite dev server |
| root | `npm run build` | Production build for frontend |
| backend | `npm start` | Start Express server (nodemon ready) |

## 🧪 API Routes (backend)
- `GET /api/DisplayData` – returns `food_items` and `food_category`
- `POST /api/OrderData` – sample order handler (extend as needed)

## 📦 Deployment Checklist
1. Build the frontend: `npm run build`
2. Host `dist/` on your static host of choice (Vercel, Netlify, etc.)
3. Deploy the backend to your Node-friendly host (Render, Railway, etc.)
4. Configure environment variables (Mongo URI, JWT secrets, etc.)

## 🪄 Push to GitHub
```bash
# Verify status
git status

# Stage changes
git add .

# Commit
git commit -m "Update README and project assets"

# Add remote (first time only)
git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git

# Push
git push -u origin main
```
> Replace `<YOUR_USERNAME>` and `<REPO_NAME>` with your GitHub details. If `main` does not exist yet, `git branch -M main` before the push.

## 📨 Need Help?
Open an issue or reach out with screenshots/logs. Happy building! 🍕🚚
