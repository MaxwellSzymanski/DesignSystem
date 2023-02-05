import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import ConceptPage from "./pages/ConceptPage";
import ComponentsPage from "./pages/ComponentsPage";

import Tag from "./components/button/Tag";
import DarkToggle from "./layouts/DarkToggle";
import NavBar from "./layouts/NavBar";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import PDFViewer from "./pages/PDFViewer";
TimeAgo.addDefaultLocale(en);

function App() {
  function renderScreenSizePill() {
    return (
      <div className="absolute top-2 left-2">
        <div className="block md:hidden">
          <Tag>Mobile</Tag>
        </div>
        <div className="hidden md:block lg:hidden">
          <Tag>Tablet</Tag>
        </div>
        <div className="hidden lg:block xl:hidden">
          <Tag>Screen</Tag>
        </div>
        <div className="hidden xl:block 2xl:hidden">
          <Tag>Large screen</Tag>
        </div>
        <div className="hidden 2xl:block">
          <Tag>Huge screen</Tag>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row w-full h-screen overflow-scroll transition-all bg-slate-100 dark:bg-slate-900">
      {renderScreenSizePill()}
      <div className="border-slate-200 dark:disabled:border-slate-400" />
      <DarkToggle />
      <NavBar />
      <div className="flex flex-col items-center justify-center w-full flex-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/Components" element={<ComponentsPage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/concepts/:id" element={<ConceptPage />} />
          <Route path="/pdf" element={<PDFViewer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
