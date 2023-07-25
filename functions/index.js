import functions from "firebase-functions";
import express from "express";
import cors from "cors";

import { getAllEvents, addEvent, deleteEvent, updateEvent } from "./crud.js";
const PORT = 3005;

const app = express();
app.use(cors()); // allows access from other domain
app.use(express.json()); // patch and post in json

app.get("/events", getAllEvents);
app.post("/events", addEvent);
app.delete("/events/:eventId", deleteEvent)
app.patch("/events/:eventId", updateEvent)

app.listen(PORT , () => {
  console.log(`Listening on http://localhost:3005...`)
})

export const api = functions.https.onRequest(app);


