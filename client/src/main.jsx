import { createRoot } from "react-dom/client";
import "./index.css";
import Upwork from "./Upwork.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((reg) => console.log("✅ Service Worker registered:", reg.scope))
      .catch((err) =>
        console.error("❌ Service Worker registration failed:", err)
      );
  });
}
