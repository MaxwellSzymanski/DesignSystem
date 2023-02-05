import { useFind, useSubscribe } from "meteor/react-meteor-data";
import React from "react";
import {
  Concept,
  ConceptsCollection,
} from "../../db/concepts/concepts.collection";

import H1 from "../components/typography/H1";
import H3 from "../components/typography/H3";
import H4 from "../components/typography/H4";

import ReactTimeAgo from "react-time-ago";
import { useNavigate } from "react-router";

function HomePage() {
  const userId = "Maxwell";

  const navigate = useNavigate();

  const isLoading = useSubscribe("concepts");
  const concepts = useFind(
    () => ConceptsCollection.find({ userId }, { sort: { editedAt: -1 } }),
    []
  );

  function renderConceptTile(concept?: Concept) {
    return concept ? (
      <div
        className="flex flex-col p-4 transition-all bg-white border shadow-md cursor-pointer rounded-xl text-slate-700 dark:text-slate-100 border-slate-200 dark:bg-slate-800 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 min-w-[200px]"
        onClick={() => navigate("/concepts/" + concept.title)}
      >
        <H4>{concept.title}</H4>
        {concept?.editedAt && (
          <div className="text-xs text-slate-400">
            <ReactTimeAgo date={concept.editedAt} locale="en-US" />
          </div>
        )}
      </div>
    ) : (
      <div className="flex flex-col gap-2 p-4 bg-white border shadow-md w-52 rounded-xl border-slate-200 animate-pulse dark:bg-slate-700 dark:border-slate-600">
        <div className="w-full h-8 rounded-md bg-slate-100 animate-pulse dark:bg-slate-600" />
        <div className="w-1/2 h-6 rounded-md bg-slate-100 animate-pulse dark:bg-slate-600" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4 p-10">
      <div className="flex flex-col">
        <H1 className="text-primary-700">Hello, Maxwell!</H1>
        <div className="flex flex-col">
          <H3>Your recent concepts</H3>
          <div className="flex flex-col gap-4 lg:flex-row">
            {isLoading() ? (
              <>
                {renderConceptTile()}
                {renderConceptTile()}
              </>
            ) : (
              concepts.map((concept) => {
                return renderConceptTile(concept);
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
