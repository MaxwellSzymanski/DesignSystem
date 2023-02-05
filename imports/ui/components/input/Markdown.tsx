import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";
import Button from "../button/Button";
import H1 from "../typography/H1";
import H2 from "../typography/H2";
import H3 from "../typography/H3";
import H4 from "../typography/H4";
import H5 from "../typography/H5";
import UL from "../typography/UL";
import P from "../typography/P";
import TextBox from "./TextBox";
import HR from "../displays/HR";
import AppLink from "../typography/AppLink";

interface PostProps {
  content: string;
  onSave?: (content: string) => void;
}

function Post({ content, onSave }: PostProps) {
  const [isEditing, toggleIsEditing] = useState(false);
  const [markdown, setMarkdown] = useState(content);

  useEffect(() => {
    setMarkdown(content);
    toggleIsEditing(false);
  }, [content]);

  return (
    <div className="article-wrapper">
      <article>
        <header></header>
        <main>
          <div
            onClick={() => {
              !isEditing && toggleIsEditing((e) => !e);
            }}
          >
            {isEditing ? (
              <div>
                <TextBox content={markdown} onChange={setMarkdown} />
                <div className="flex justify-end gap-4 mt-4">
                  <Button
                    onClick={() => {
                      toggleIsEditing(false);
                      onSave && onSave(markdown);
                    }}
                  >
                    Save
                  </Button>
                </div>
              </div>
            ) : (
              <div className="p-4 border rounded-lg border-slate-200 dark:border-slate-700">
                <ReactMarkdown
                  children={markdown ? markdown : "`Click to start writing...`"}
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: H1,
                    h2: H2,
                    h3: H3,
                    h4: H4,
                    h5: H5,
                    ul: UL,
                    hr: HR,
                    p: P,
                    a: AppLink,
                  }}
                />
              </div>
            )}
          </div>
        </main>
      </article>
    </div>
  );
}

export default Post;
