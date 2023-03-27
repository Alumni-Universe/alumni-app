import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Keycloak from "keycloak-js";
import Loading from "./components/shared/Loading";

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
    return <Loading/>
  }

  return <App />;
}

root.render(<AppWrapper />);

reportWebVitals();
