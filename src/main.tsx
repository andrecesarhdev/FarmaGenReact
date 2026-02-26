
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { LoadingProvider } from "./context/LoadingContext";
import LoadingOverlay from "./components/loading/LoadingOverlay";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <LoadingProvider>
    <App />
    <LoadingOverlay />
  </LoadingProvider>
);