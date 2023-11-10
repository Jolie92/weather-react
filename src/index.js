import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="container">
      <App />
      
    </div>
 <p class="footer">
  This project is coded by <strong> Laura Loriga </strong>
   <a class="githubLink" href="https://github.com/Jolie92/weather-react">
      GitHub {" "}
  </a>
</p>
  </StrictMode>
  
);