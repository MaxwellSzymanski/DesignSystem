import { Meteor } from "meteor/meteor";
import { Concept } from "/db/concepts/concepts.collection";

export default class ConceptManager {
  userId: string;

  constructor(userId: string) {
    this.userId = userId;
  }

  async deleteConcept(id: string): Promise<Concept> {
    //@ts-ignore
    const res = await Meteor.callPromise("concept.delete", {
      _id: id,
    });
    console.log(res);
    return res;
  }

  async findByTitle(title: string): Promise<Concept> {
    //@ts-ignore
    const res = await Meteor.callPromise("concept.getByAttribute", {
      title: title,
    });
    return res;
  }

  async getUserConcepts(): Promise<Concept[]> {
    //@ts-ignore
    const res = await Meteor.callPromise("concept.getAll", {
      userId: this.userId,
    });
    return res;
  }

  async updateConceptContent(
    concept: Pick<Concept, "_id" | "content">
  ): Promise<Concept[]> {
    //@ts-ignore
    const res = await Meteor.callPromise("concept.updateContent", {
      _id: concept._id,
      content: concept.content,
    });
    return res;
  }

  async updateConceptTitle(
    concept: Pick<Concept, "_id" | "title">
  ): Promise<0 | 1> {
    //@ts-ignore
    const existingDocumentsForTitle = await Meteor.callPromise(
      "concept.getAllByAttribute",
      {
        _id: concept._id,
        userId: this.userId,
        title: concept.title,
      }
    );
    if (existingDocumentsForTitle.length > 0) return 0;
    //@ts-ignore
    const res = await Meteor.callPromise("concept.updateTitle", {
      _id: concept._id,
      title: concept.title,
    });
    return res;
  }

  async createConcept(title: string, content?: string) {
    const document = await this.findByTitle(title);
    if (!document)
      //@ts-ignore
      return await Meteor.callPromise("concept.create", {
        userId: "Maxwell",
        title: title,
        content: content ?? "",
      });
  }
}
