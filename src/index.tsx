import * as React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import Keycloak from "keycloak-js";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const keycloak = new Keycloak();

function AppWrapper() {
  const [authenticated, setAuthenticated] = React.useState(false);

  React.useEffect(() => {
    keycloak
      .init({
        onLoad: "login-required",
      })
      .then((auth) => {
        if (auth) {
          setAuthenticated(true);
        }
      })
      .catch((error) => {
        console.log("Keycloak error", error);
      });
  }, []);

  if (!authenticated) {
    return <div>Loading...</div>;
  }

  return <App />;
}

root.render(
  <React.Suspense fallback={<div>Loading...</div>}>
    <AppWrapper />
  </React.Suspense>
);

reportWebVitals();
