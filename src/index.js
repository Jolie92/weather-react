import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Current from "./Current";
import Search from "./Search";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="container">
      <Search />
      <App />
      <Current />
    </div>
  </StrictMode>
);
