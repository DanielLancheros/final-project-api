import { MongoClient } from "mongodb";
import { mongoURI } from "../creds";

const connection = new MongoClient (mongoURI)

await connection .connect()

export const db = connection.db("Cluster1")