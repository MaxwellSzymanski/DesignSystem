import React from "react";
import type { IHighlight } from "react-pdf-highlighter";
import Button from "../components/button/Button";
import Tag from "../components/button/Tag";
import H3 from "../components/typography/H3";

interface Props {
  highlights: Array<IHighlight>;
  resetHighlights: () => void;
  toggleDocument: () => void;
}

const updateHash = (highlight: IHighlight) => {
  document.location.hash = `highlight-${highlight.id}`;
};

export function PDFSidebar({
  highlights,
  toggleDocument,
  resetHighlights,
}: Props) {
  return (
    <div className="w-[25%] overflow-scroll bg-white border-r-2 h-screen">
      <div className="p-4">
        <H3>Your paper</H3>
        <p>
          <small>
            To create area highlight hold ⌥ Option key (Alt), then click and
            drag.
          </small>
        </p>
      </div>

      <ul className="">
        {highlights.map((highlight, index) => (
          <li
            key={index}
            className="p-4 m-4 transition-all border cursor-pointer rounded-xl hover:bg-slate-100"
            onClick={() => {
              updateHash(highlight);
            }}
          >
            <div>
              <strong className="text-slate-700 dark:text-slate-200">
                {highlight.comment.text}
              </strong>
              {highlight.content.text ? (
                <blockquote className="mt-2 text-slate-500 dark:text-slate-200">
                  {`${highlight.content.text.slice(0, 90).trim()}…`}
                </blockquote>
              ) : null}
              {highlight.content.image ? (
                <div className="highlight__image mt-2 overflow-auto max-w-[300px] border-dashed border border-slate-300">
                  <img src={highlight.content.image} alt={"Screenshot"} />
                </div>
              ) : null}
              <div className="flex flex-row-reverse items-center justify-between">
                <div className="text-xs text-slate-500 dark:text-slate-200">
                  Page {highlight.position.pageNumber}
                </div>
                {highlight.comment.emoji && (
                  <Tag className="mt-2 text-slate-500 dark:text-slate-200">
                    {highlight.comment.emoji}
                  </Tag>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="p-2">
        <Button onClick={toggleDocument}>Toggle PDF document</Button>
      </div>
      {highlights.length > 0 ? (
        <div className="p-2">
          <Button onClick={resetHighlights}>Reset highlights</Button>
        </div>
      ) : null}
    </div>
  );
}
