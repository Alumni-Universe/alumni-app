  import React, { useContext, useCallback } from "react";
  import ReactDOM from "react-dom/client";
  import "./index.css";
  import App from "./App";
  import reportWebVitals from "./reportWebVitals";
  import keycloak from "./keycloakSetup";
  import {
    AlumniUserContext,
    AlumniUserProvider,
  } from "./contexts/AlumniUserContext";
  import { AlumniUserContextType } from "./types/AlumniUserContextType";
  import { IAlumniUser } from "./interfaces/Interfaces";
  import Loading from "./components/shared/Loading";

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );

  function AppWrapper() {
    const [authenticated, setAuthenticated] = React.useState(false);
    const [fetchedUser, setFetchedUser] = React.useState(false);
    const { postAlumniUser, getUser, setAuthenticatedUser } = useContext(
      AlumniUserContext
    ) as AlumniUserContextType;

    const handleUser = useCallback(
      async (userId: string, fullName: string) => {
        let existingUser = await getUser(userId);
        if (!existingUser) {
          const newAlumniUser: IAlumniUser = {
            userId: userId,
            name: fullName,
            picture: "",
            status: null,
            bio: null,
            funFact: null,
          };
          await postAlumniUser(newAlumniUser);
          existingUser = newAlumniUser;
        }
        setAuthenticatedUser(existingUser);
      },
      [getUser, postAlumniUser, setAuthenticatedUser]
    );

    React.useEffect(() => {
      if (!fetchedUser) { // Add this line
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
              const fullName =
                keycloak.tokenParsed?.given_name +
                " " +
                keycloak.tokenParsed?.family_name;
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
        setFetchedUser(true);
      }
    }, [handleUser, fetchedUser]);

    if (!authenticated) {
      return <Loading />;
    }

    return <App />;
  }

  root.render(
    <AlumniUserProvider userId={""} name={""} picture={""} status={null} bio={null} funFact={null}>
      <AppWrapper />
    </AlumniUserProvider>
  );

  reportWebVitals();
