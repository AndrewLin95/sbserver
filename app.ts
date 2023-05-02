import path from 'path';
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 8080;
const app: Application = express();
app.use(bodyParser.json());

app.get("/api/test", (req: Request, res: Response) => {
  res.status(200).json({ message: "test"});
})


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});