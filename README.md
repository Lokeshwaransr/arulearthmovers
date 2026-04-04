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
arulearthmovers/
├── client/
├── server/
└── package.json
```

## Frontend

- Responsive navigation
- Home page with excavator hero section
- Services page
- Work gallery
- Contact page with quick actions

## Backend

- Express server
- CORS and JSON middleware
- Health route: `/api/health`
- Service route: `/api/services`
- Contact route scaffold

## Run Locally

1. Install dependencies:

```bash
npm install
cd client && npm install
cd ../server && npm install
```

2. Configure backend environment:

Copy `server/.env.example` to `server/.env` and update values if needed.

3. Start the project:

```bash
npm run dev
```
