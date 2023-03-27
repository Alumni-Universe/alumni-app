import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import keycloak from "./keycloakSetup";
import { AlumniUserContext, AlumniUserProvider } from "./contexts/AlumniUserContext";
import { AlumniUserContextType } from "./types/AlumniUserContextType";
import { IAlumniUser } from "./interfaces/Interfaces";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function AppWrapper() {
  const [authenticated, setAuthenticated] = React.useState(false);
  const { postAlumniUser, getUser } = useContext(AlumniUserContext) as AlumniUserContextType;

  async function handleUser(userId: string, fullName: string) {
    const existingUser = await getUser(userId);
    if (!existingUser) {
      const newAlumniUser: IAlumniUser = {
        userId: userId,
        name: fullName,
        picture: "",
        status: null,
        bio: null,
        funFact: null,
      };
      postAlumniUser(newAlumniUser);
    }
  }

  React.useEffect(() => {
    keycloak
      .init({
        onLoad: "login-required",
        checkLoginIframeInterval: 5000,
      })
      .then(async (auth) => {
        if (auth) {
          setAuthenticated(true);
          console.log("Access token:", keycloak.token);
          console.log("Token expires in:", keycloak.tokenParsed?.exp);
          const userId = keycloak.tokenParsed?.sub;
          const fullName = keycloak.tokenParsed?.given_name + " " + keycloak.tokenParsed?.family_name;

          if (userId) {
            handleUser(userId, fullName);
          } else {
            console.error("User ID is undefined");
          }
        }
      })
      .catch((error) => {
        console.log("Keycloak error", error);
        if (error) {
          console.log("Error response", error.response);
          console.log("Error details", error.message);
        }
      });
  }, []);

  if (!authenticated) {
    return <div>Loading...</div>;
  }

  return <App />;
}

root.render(
  <AlumniUserProvider userId={""} name={""} picture={""} status={null} bio={null} funFact={null}>
    <AppWrapper />
  </AlumniUserProvider>
);

reportWebVitals();