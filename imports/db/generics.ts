import { Mongo, UnionOmit } from "meteor/mongo";
import { ObjectLiteral } from "../../types/generics";

export function getDocumentIdMethod<T extends ObjectLiteral>(
  schema: Partial<T>,
  check: () => void,
  collection: Mongo.Collection<T, T>
): string | undefined {
  check();

  const document = collection.findOne(schema);
  return document?._id;
}

export function insertDocumentMethod<T extends ObjectLiteral>(
  schema: UnionOmit<T, "_id">,
  check: () => void,
  collection: Mongo.Collection<T, T>
): string | undefined {
  check();

  return collection.insert(schema);
}

/*
export function updateDocumentMethod<T extends ObjectLiteral>(
  _id: string,
  schema: UnionOmit<T, "_id">,
  check: () => void,
  collection: Mongo.Collection<T, T>
): number {
  check();

  return collection.update(_id, {$set: schema});
}
*/

export function getAllDocumentsMethod<T extends ObjectLiteral>(
  schema: UnionOmit<T, "_id">,
  check: () => void,
  collection: Mongo.Collection<T, T>
): T[] {
  check();

  return collection.find(schema).fetch();
}

export function getDocumentByIdMethod<T extends ObjectLiteral>(
  _id: string,
  check: () => void,
  collection: Mongo.Collection<T, T>
): T | undefined {
  check();
  return collection.findOne(_id);
}

export function getDocumentByAttributesMethod<T extends ObjectLiteral>(
  schema: Partial<T>,
  check: () => void,
  collection: Mongo.Collection<T, T>
): T | undefined {
  check();
  return collection.findOne(schema);
}

export function getDocumentsByAttributesMethod<T extends ObjectLiteral>(
  schema: Partial<T>,
  check: () => void,
  collection: Mongo.Collection<T, T>
): T[] | undefined {
  check();
  console.log(schema);
  return collection.find(schema).fetch();
}

export function getAllDocumentsForIdMethod<T extends ObjectLiteral>(
  _id: string,
  check: () => void,
  collection: Mongo.Collection<T, T>
): T[] {
  check();

  return collection.find(_id).fetch();
}

export function removeDocumentBySchemaMethod<T extends ObjectLiteral>(
  schema: UnionOmit<T, "_id">,
  check: () => void,
  collection: Mongo.Collection<T, T>
) {
  check();

  const document = collection.findOne(schema);
  if (document) {
    return collection.remove({ _id: document._id });
  }
  return 0;
}

export function removeDocumentByIdMethod<T extends ObjectLiteral>(
  id: string,
  check: () => void,
  collection: Mongo.Collection<T, T>
) {
  check();

  const document = collection.findOne(id);
  if (document) {
    return collection.remove({ _id: document._id });
  }
  return 0;
}

export function toggleDocumentMethod<T extends ObjectLiteral>(
  schema: UnionOmit<T, "_id">,
  check: () => void,
  collection: Mongo.Collection<T, T>
) {
  check();

  const document = collection.findOne(schema);
  if (document) {
    return collection.remove({ _id: document._id });
  }
  return collection.insert(schema);
}

export async function checkIfDocumentExistsByIdMethod<T extends ObjectLiteral>(
  id: string,
  check: () => void,
  collection: Mongo.Collection<T, T>
) {
  check();
  console.log("looking");

  const document = collection.findOne(id);
  if (document) {
    return true;
  }
  console.log("not found");
  return false;
}
