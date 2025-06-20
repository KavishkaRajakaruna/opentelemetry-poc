// Initialize OpenTelemetry tracing
require('./tracing');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from API' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
