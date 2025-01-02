import { createRoot } from "react-dom/client";
import App from "./App";
import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; // Redux Provider
import store from "./store/store"; // Redux store
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}> {/* Redux store'u sağla */}
    <GlobalProvider> {/* Global context */}
      <BrowserRouter> {/* Routing */}
        <App />
      </BrowserRouter>
    </GlobalProvider>
  </Provider>
);
