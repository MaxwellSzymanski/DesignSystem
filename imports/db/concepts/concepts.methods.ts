import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Concept, ConceptsCollection } from "./concepts.collection";
import {
  checkIfDocumentExistsByIdMethod,
  getDocumentByAttributesMethod,
  getDocumentByIdMethod,
  getDocumentIdMethod,
  getDocumentsByAttributesMethod,
  insertDocumentMethod,
  removeDocumentByIdMethod,
} from "../generics";

type ConceptMethodsKeys =
  | "concept.create"
  | "concept.getId"
  | "concept.getAll"
  | "concept.getById"
  | "concept.getByAttribute"
  | "concept.getAllByAttribute"
  | "concept.delete"
  | "concept.updateContent"
  | "concept.updateTitle"
  | "concept.checkIfExists";

function conceptCheck({ userId, title }: Pick<Concept, "userId" | "title">) {
  check(userId, String);
  check(title, String);
}

function userCheck(userId: string) {
  check(userId, String);
}

type ConceptMethodsMap = {
  [key in ConceptMethodsKeys]: (arg0: Concept) => any;
};

export const ConceptMethods: ConceptMethodsMap = {
  "concept.getId": ({ userId, title }: Concept) => {
    return getDocumentIdMethod<Concept>(
      { userId, title },
      () => conceptCheck({ userId, title }),
      ConceptsCollection
    );
  },
  "concept.create": ({ userId, title, content }: Concept) => {
    return insertDocumentMethod<Concept>(
      {
        userId,
        title,
        content: content,
        createdAt: new Date(),
        editedAt: new Date(),
      },
      () => userCheck(userId),
      ConceptsCollection
    );
  },
  "concept.getById": ({ _id }): Concept | undefined => {
    return getDocumentByIdMethod<Concept>(
      _id,
      () => check(_id, String),
      ConceptsCollection
    );
  },
  "concept.getByAttribute": ({ title }): Concept | undefined => {
    return getDocumentByAttributesMethod<Concept>(
      { title },
      () => check(title, String),
      ConceptsCollection
    );
  },
  "concept.getAll": ({ userId }: Concept) => {
    return getDocumentsByAttributesMethod<Concept>(
      { userId },
      () => userCheck(userId),
      ConceptsCollection
    );
  },
  "concept.getAllByAttribute": ({ userId, title }: Concept) => {
    return getDocumentsByAttributesMethod<Concept>(
      { userId, title },
      () => conceptCheck({ userId, title }),
      ConceptsCollection
    );
  },
  "concept.delete": ({ _id }: Concept) => {
    return removeDocumentByIdMethod<Concept>(
      _id,
      () => check(_id, String),
      ConceptsCollection
    );
  },
  "concept.updateContent": ({ _id, content }: Concept) => {
    return ConceptsCollection.update(_id, {
      $set: { content: content, editedAt: new Date() },
    });
  },
  "concept.updateTitle": ({ _id, title }: Concept) => {
    return ConceptsCollection.update(_id, {
      $set: { title: title, editedAt: new Date() },
    });
  },
  "concept.checkIfExists": ({ userId }: Concept) => {
    return checkIfDocumentExistsByIdMethod<Concept>(
      userId,
      () => userCheck(userId),
      ConceptsCollection
    );
  },
};

Meteor.methods(ConceptMethods);
