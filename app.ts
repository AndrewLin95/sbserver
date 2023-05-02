import path from 'path';
import express, { Application } from 'express';

const PORT = process.env.PORT || 8080;
const app: Application = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});