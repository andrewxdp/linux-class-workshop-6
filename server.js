const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());


const pool = new Pool({
  user: 'bloguser',
  host: 'blog-db',
  database: 'blog',
  password: 'blogpass',
  port: 5432,
});


app.get('/api/posts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
