import express from 'express';
import { connectDB } from './db';

const app = express();
connectDB();

app.post('/saveNote', (req, res) => {
  console.log('saved note');
});

app.listen('5000', () => console.log("Server listening on port 5000"))