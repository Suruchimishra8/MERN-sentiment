# MERN Sentiment (Ready-to-Run)

A complete MERN (MongoDB, Express, React, Node) app for sentiment analysis using **wink-sentiment**.

## Quick Start

### 1) Backend
```bash
cd server
npm install
npm run dev
```
You should see:
```
✅ MongoDB connected
🚀 Server listening on http://localhost:5000
```

### 2) Frontend
```bash
cd ../client
npm install
npm run dev
```
Open http://localhost:5173

### Test API (optional)
```bash
curl -X POST http://localhost:5000/api/analyze -H "Content-Type: application/json" -d '{"text":"I love this!"}'
```

## Endpoints
- **POST** `/api/analyze` — analyze one text & save
- **POST** `/api/analyze/batch` — analyze multiple texts
- **GET** `/api/analyses?label=positive|neutral|negative&limit=20&page=1` — list items
- **GET** `/api/stats` — dataset statistics

## Dataset
See `dataset/sample_reviews.json` and `dataset/sample_reviews.csv` for sample inputs.
