import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";

import App from "./App";
import Current from "./Current";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="container">
      <App />
    </div>
  </StrictMode>
);