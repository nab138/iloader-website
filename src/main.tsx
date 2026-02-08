// Copyright (C) 2026 nab138
// Licensed under the GNU AGPLv3. See LICENSE for details.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router";
import PairingFile from "./PairingFile.tsx";
import logo from "/iloader.svg";

import "./App.css";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="app">
        <div className="title-block" onClick={() => navigate("/")}>
          <img src={logo} alt="iloader logo" className="logo" />
          <div>
            <h1 className="title">iloader</h1>
            <p className="subtitle">iOS Sideloading Companion</p>
          </div>
        </div>

        <Routes>
          <Route path="*" element={<App />} />
          <Route path="/pairing" element={<PairingFile />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>
          © 2026 nab138. Website source licensed under{" "}
          <a href="https://github.com/nab138/iloader-website/blob/main/LICENSE">
            AGPLv3
          </a>
          . Branding, logos, and the name "iloader" are excluded and subject to{" "}
          <a href="https://github.com/nab138/iloader-website/blob/main/LICENSE-BRANDING">
            separate terms
          </a>
          .
        </p>
      </footer>
    </>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </StrictMode>,
);
