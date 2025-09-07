import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import TypescriptBasics1 from "./pages/TypescriptBasics1";
import TypescriptBasics2 from "./pages/TypescriptBasics2";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/typescript-basics-1" element={<TypescriptBasics1 />} />
        <Route path="/typescript-basics-2" element={<TypescriptBasics2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
