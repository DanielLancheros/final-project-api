import { db } from "./dbConnect.js";
import { ObjectId } from "mongodb";

const coll = db.collection('Data')

// CRUD: GET -- CHATGPT BELOW 
export async function getAllEvents(req, res){
  const events = await coll.find({}).toArray()
  res.send(events)
}

//CRUD: POST
export async function addEvent (req, res) {
  const newEvent = req.body
  await coll.insertOne(newEvent)
  res.status(201).send({message: "Event Added"})
}

//CRUD: DELETE
export async function deleteEvent (req, res) {
  try {
    const eventId = {"_id": new ObjectId(req.params.eventId)};
    await coll.deleteOne(eventId);
    await getAllEvents(req,res);
  } catch (error) {
    res.status(500).send({error: "Issue when deleting event"})
  }
  }

