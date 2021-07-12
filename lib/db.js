import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.6nvod.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
  );
  return client;
}
