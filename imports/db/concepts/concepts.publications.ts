import { Meteor } from "meteor/meteor";
import { ConceptsCollection } from "./concepts.collection";

Meteor.publish("concepts", (userID: string) => {
  return ConceptsCollection.find({ userID });
});
