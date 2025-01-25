import { StrictMode } from "react";
import * as client from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./providers/ContextProvider.jsx";
import { ImageProvider } from "./providers/ImageProvider.jsx";

client.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <ImageProvider>
        <App />
      </ImageProvider>
    </ContextProvider>
  </StrictMode>
);