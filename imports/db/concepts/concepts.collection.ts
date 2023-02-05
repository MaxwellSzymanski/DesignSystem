import { Mongo } from "meteor/mongo";

// COLLECTION
export interface Concept {
  _id: string;
  userId: string;
  title: string;
  content: string;
  createdAt: Date;
  editedAt?: Date;
}

export const ConceptsCollection = new Mongo.Collection<Concept>("concepts");
