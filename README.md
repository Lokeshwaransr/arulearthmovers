# Arul Earth Movers

Full-stack MERN website for a mini excavator business.

## Tech Stack

- MongoDB
- Express.js
- React.js
- Node.js
- Vite
- Framer Motion

## Project Structure

```text
arul-earth-movers/
├── client/
└── server/
```

## Frontend

- Responsive top navigation
- Home page with centered excavator image and Tamil description
- Services page with Tamil service cards
- Work page with 4-image gallery
- Contact page with phone, WhatsApp, Instagram, and email actions
- Loading spinner and motion effects
- SEO title: `Mini Excavator Services in Tamil Nadu`

## Backend

- Express server with CORS and JSON middleware
- Health route: `/api/health`
- Service route: `/api/services`
- Optional contact routes: `/api/contacts`
- MongoDB connection scaffold using Mongoose

## Run Locally

### 1. Install dependencies

```bash
cd server
npm install
```

```bash
cd client
npm install
```

### 2. Configure backend environment

Copy `server/.env.example` to `server/.env` and set your MongoDB connection string if needed.

Example:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/arulearthmovers
```

### 3. Start the backend

```bash
cd server
npm run dev
```

### 4. Start the frontend

```bash
cd client
npm run dev
```

### 5. Open the site

Visit:

```text
http://localhost:5173
```

## Notes

- The frontend uses publicly hosted gallery images.
- MongoDB is optional for now. The site UI works without database data.
- If you want, the next step can be adding a real contact form that stores enquiries in MongoDB.
