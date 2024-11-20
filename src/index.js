import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
 <StrictMode>
    <BrowserRouter future={{
    v7_startTransition: true,
  }}>
      <App />
    </BrowserRouter>
 </StrictMode>

);
