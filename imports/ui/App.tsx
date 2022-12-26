import React, { useEffect } from "react";
import DarkToggle from "./components/DarkToggle";

import VERSIONS from "/package.json";

const BOX_CLASS =
  "flex items-center justify-between p-2 md:p-4 transition-all border rounded-lg shadow-md border-slate-200 hover:shadow-lg bg-white dark:bg-slate-600 dark:border-slate-500 dark:text-slate-100 text-slate-600 hover:py-3 hover:md:py-5 hover:my-1 my-2 font-xs md:font-base";

const TAG_CLASS =
  "px-4 py-2 text-sm font-bold rounded-lg bg-sky-100 text-primary-500 dark:text-primary-100 dark:bg-primary-700 dark:border-primary-600 dark:border";

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-slate-100 dark:bg-slate-800">
      <DarkToggle />
      <h1 className="mb-4 text-3xl font-bold text-slate-700 dark:text-white md:text-5xl lg:text-6xl">
        Welcome to{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-sky-500">
          MeteorUI
        </span>
      </h1>
      <p className="px-12 text-base font-normal text-center md:text-lg text-slate-500 lg:text-lg dark:text-slate-400">
        MeteorUI helps you kickstart your following Meteor project by including
        the following packages:
      </p>
      <div className="flex flex-col w-full p-8 py-4 md:py-8 md:w-1/2 xl:w-1/4">
        <div className={BOX_CLASS}>
          <div className="flex items-center gap-4">
            <img src="/meteor.svg" className="w-8"></img>
            <p className="text-lg font-semibold">Meteor</p>
          </div>
          <div className={TAG_CLASS}>v2.8.1</div>
        </div>
        <div className={BOX_CLASS}>
          <div className="flex items-center gap-4">
            <img src="/react.png" className="w-8"></img>
            <p className="text-lg font-semibold ">React</p>
          </div>
          <div className={TAG_CLASS}>
            v{VERSIONS.dependencies.react.replace("^", "")}
          </div>
        </div>
        <div className={BOX_CLASS}>
          <div className="flex items-center gap-4">
            <img src="/typescript.png" className="w-8"></img>
            <p className="text-lg font-semibold ">TypeScript</p>
          </div>
          <div className={TAG_CLASS}>
            v{VERSIONS.devDependencies.typescript.replace("^", "")}
          </div>
        </div>
        <div className={BOX_CLASS}>
          <div className="flex items-center gap-4">
            <img src="/tailwindcss.png" className="w-8"></img>
            <p className="text-lg font-semibold ">TailwindCSS</p>
          </div>
          <div className={TAG_CLASS}>
            v{VERSIONS.devDependencies.tailwindcss.replace("^", "")}
          </div>
        </div>
        <div className={BOX_CLASS}>
          <div className="flex items-center gap-4">
            <img src="/storybook.png" className="w-8"></img>
            <p className="text-lg font-semibold ">StoryBook</p>
          </div>
          <div className={TAG_CLASS}>
            v{VERSIONS.devDependencies["@storybook/react"].replace("^", "")}
          </div>
        </div>
      </div>
      <p className="text-xs italic md:text-base text-slate-400">
        Last updated: 3 December 2022
      </p>
    </div>
  );
}

export default App;
