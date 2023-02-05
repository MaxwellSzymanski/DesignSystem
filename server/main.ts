import { Meteor } from "meteor/meteor";
import "../imports/db/concepts/concepts.methods";
import "../imports/db/concepts/concepts.publications";

Meteor.startup(async () => {
  console.log("👋 Meteor server started");
});
