import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFind, useSubscribe } from "meteor/react-meteor-data";

import { Resizable } from "re-resizable";

import H4 from "../components/typography/H4";
import P from "../components/typography/P";
import SmallText from "../components/typography/SmallText";
import ConceptManager from "../../managers/ConceptManager";
import { ConceptsCollection } from "../../db/concepts/concepts.collection";
import HR from "../components/displays/HR";
import { twMerge } from "tailwind-merge";
import Icon from "../components/icon/Icon";

function getLinkTitle(title: string): string {
  return title.split("/")[title.split("/").length - 1];
}

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const links = ["Home", "Components", "Settings"];

  const userId = "Maxwell";

  const isLoading = useSubscribe("concepts");
  const concepts = useFind(() => ConceptsCollection.find({ userId }), []);

  const actionButtonClass =
    "flex items-center justify-center gap-2 p-3 text-sm font-semibold transition-all cursor-pointer select-none dark:bg-slate-700 dark:text-slate-200 rounded-xl dark:hover:bg-slate-600 bg-primary-100 text-primary-700 hover:bg-primary-200";

  function renderLinks(links: string[], concepts: boolean = false) {
    return links.map((link) => {
      return (
        <div
          key={link}
          onClick={() => navigate(concepts ? "/concepts/" + link : "/" + link)}
          className={twMerge(
            `text-sm hover:pl-4 hover:pr-2 my-1 font-medium transition-all rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900 dark:text-slate-200 select-none ${
              getLinkTitle(location.pathname) === link
                ? "py-2 lg:py-3 bg-primary-50 hover:bg-primary-50 text-primary-700 font-semibold dark:bg-slate-900 pl-4 pr-2"
                : "p-2 px-3 lg:p-3"
            }`
          )}
        >
          <P className="overflow-hidden text-ellipsis whitespace-nowrap">
            {link}
          </P>
        </div>
      );
    });
  }

  function createTemplates() {
    const exampleContent = `## Hello there
### Subtitle
This is a __post__ in *bold*

-------
You can add whatever you want in \`markdown\`, as well as lists:
- Item 1
- Item 2

And you can have [Links](Links "link")
`;
    const conceptManager = new ConceptManager("Maxwell");
    conceptManager.createConcept("Links", "");
    conceptManager.createConcept("Bookmarks", exampleContent);
  }

  return (
    <Resizable
      className="flex flex-col h-full p-4 bg-white border-r shadow-lg w-fit border-slate-200 min-w-[200px] pt-10 text-slate-700 dark:bg-slate-800 dark:border-slate-700"
      defaultSize={{
        width: 200,
        height: "100%",
      }}
      maxWidth={400}
      enable={{
        top: false,
        right: true,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
    >
      <div className="flex flex-col justify-between w-full h-full">
        <div>
          <H4 className="text-primary-700">ReLink</H4>
          {renderLinks(links)}
          <HR />
          <SmallText className="mt-6">Concepts</SmallText>
          {isLoading() ? (
            <div className="flex flex-col gap-2">
              <div className="w-full h-10 bg-slate-100 dark:bg-slate-700 animate-pulse rounded-xl" />
              <div className="w-full h-10 bg-slate-100 dark:bg-slate-700 animate-pulse rounded-xl opacity-80" />
              <div className="w-full h-10 bg-slate-100 dark:bg-slate-700 animate-pulse rounded-xl opacity-60" />
            </div>
          ) : (
            renderLinks(
              concepts.map((concept) => {
                return concept.title;
              }),
              true
            )
          )}
        </div>
        <div className="flex flex-col gap-4">
          <div className={actionButtonClass}>
            <Icon icon="pen" />
            New Concept
          </div>
          <div className={actionButtonClass} onClick={() => createTemplates()}>
            <Icon icon="academy" />
            Add templates
          </div>
        </div>
      </div>
    </Resizable>
  );
}

export default NavBar;
