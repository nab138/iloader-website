// Copyright (C) 2026 nab138
// Licensed under the GNU AGPLv3. See LICENSE for details.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
