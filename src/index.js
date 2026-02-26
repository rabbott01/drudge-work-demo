/**
 * Drudge Work Demo - Main entry point
 * This project contains intentional tech debt for AI-assisted development demos.
 */

const express = require('express');
const { getGreeting, parseQuery } = require('./utils');

const app = express();
const PORT = process.env.PORT || 3000;

// TODO: Add request body parsing middleware for POST/PUT routes
// TODO: Replace with a proper config module - hardcoded values below
const DEFAULT_LIMIT = 10;

app.get('/', (req, res) => {
  const greeting = getGreeting();
  res.json({ message: greeting, version: '1.0.0' });
});

app.get('/api/items', (req, res) => {
  // FIXME: pagination params should be validated - limit could be negative
  const { limit, offset } = parseQuery(req.query);
  const safeLimit = Math.min(limit, 100);
  const safeOffset = Math.max(0, offset);

  // TODO: Connect to actual data source - using mock data for now
  const mockItems = Array.from({ length: safeLimit }, (_, i) => ({
    id: safeOffset + i + 1,
    name: `Item ${safeOffset + i + 1}`,
  }));

  res.json({ items: mockItems });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
