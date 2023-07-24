import express from 'express';
import cors from 'cors';
import { onRequest } from 'firebase-functions/v2/https';

const app = express();
app.use(cors());
app.use(express.json());

/* Root and 404 */
app.get("/", (req,res) => {
  res.status(200).send("Test");
});

app.get("/", getAllEvents)

app.get("*", (req,res) => {
  res.status(404).send("404 Not Found");
});

export const api = onRequest(app);
