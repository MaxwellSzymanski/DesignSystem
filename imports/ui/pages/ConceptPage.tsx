import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Markdown from "../components/input/Markdown";
import H1 from "../components/typography/H1";
import { ConceptsCollection } from "../../db/concepts/concepts.collection";
import ConceptManager from "../../managers/ConceptManager";
import Tag from "../components/button/Tag";
import Icon from "../components/icon/Icon";
import P from "../components/typography/P";
import Button from "../components/button/Button";
import IconButton from "../components/button/IconButton";
import Modal from "../components/modal/Modal";

import ReactTimeAgo from "react-time-ago";
import { useFind, useSubscribe } from "meteor/react-meteor-data";
import Spinner from "../components/spinner/Spinner";
import TextInput from "../components/input/TextInput";

function ConceptPage({}) {
  const { id } = useParams();

  const navigate = useNavigate();

  const userId = "Maxwell";

  const conceptManager = new ConceptManager(userId);

  const isLoading = useSubscribe("concepts");
  const concept = useFind(
    () => ConceptsCollection.find({ userId: userId, title: id }),
    [id]
  )[0];

  const [showModal, setShowModal] = useState(false);
  const [title, updateTitle] = useState<string | undefined>(concept?.title);
  const [isEditingTitle, toggleIsEditingTitle] = useState(false);

  useEffect(() => {
    if (concept) updateTitle(concept.title);
  }, [concept]);

  function renderDoesNotExist() {
    return (
      <div>
        <P>This concept does not exist yet. Create concept?</P>
        <div className="flex justify-end gap-2 mt-4">
          <Button style="secondary" onClick={() => navigate(-1)}>
            Go back
          </Button>
          <Button>Create</Button>
        </div>
      </div>
    );
  }

  function renderModal() {
    if (concept)
      return (
        <Modal
          show={showModal}
          OnConfirm={() => deleteConcept()}
          confirmText="Delete"
          onDismiss={() => setShowModal(false)}
          dismissText="Cancel"
          state="error"
        >
          Are you sure you want to delete the concept "{concept.title}"?
        </Modal>
      );
  }

  async function deleteConcept() {
    console.log("Deleting concept " + concept?.title);
    if (concept) {
      await conceptManager.deleteConcept(concept._id);
      setShowModal(false);
      navigate(-1);
    }
  }

  async function saveConcept(content: string) {
    if (concept)
      await conceptManager.updateConceptContent({
        _id: concept._id,
        content: content,
      });
  }

  function renderConcept() {
    if (concept)
      return (
        <div>
          {renderModal()}
          {concept?.editedAt && (
            <Tag className="mb-4">
              <Icon icon="edit" />
              <ReactTimeAgo date={concept?.editedAt} locale="en-US" />
            </Tag>
          )}
          <Markdown
            content={concept.content}
            onSave={(content: string) => saveConcept(content)}
          />
        </div>
      );
  }

  async function saveTitle() {
    if (title) {
      const res = await conceptManager.updateConceptTitle({
        _id: concept._id,
        title: title,
      });
      toggleIsEditingTitle(false);
      if (res === 1) navigate("/concepts/" + title);
    }
    updateTitle(concept.title);
  }

  return (
    <div
      className={`p-12 bg-white shadow-lg rounded-xl dark:bg-slate-800 dark:border dark:border-slate-700 ${
        concept ? "min-w-[80%]" : "max-w-[800px]"
      }`}
    >
      <div className="flex justify-between">
        {isEditingTitle ? (
          <div className="flex items-center justify-center gap-2 mb-4">
            <TextInput
              value={title}
              onChange={(e) => updateTitle(e)}
              onClickOutside={saveTitle}
            />
            <IconButton icon="save" onClick={saveTitle} />
          </div>
        ) : (
          <div onClick={() => toggleIsEditingTitle(true)}>
            <H1 className="max-w-full break-words">{id}</H1>
          </div>
        )}
        {concept && (
          <IconButton icon="trash" onClick={() => setShowModal(true)} />
        )}
      </div>
      {isLoading() && (
        <div className="flex items-center justify-center w-full my-10">
          <Spinner className="w-10 h-10" />
        </div>
      )}
      {!concept && !isLoading() && renderDoesNotExist()}
      {concept && renderConcept()}
    </div>
  );
}

export default ConceptPage;
