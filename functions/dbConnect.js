import { MongoClient } from "mongodb";
import { mongoURI } from "./creds.js";

const connection = new MongoClient(mongoURI)

export const db = connection.db("MainDB")

