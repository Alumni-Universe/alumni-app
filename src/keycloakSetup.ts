import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "https://keyclokalumni.azurewebsites.net/auth",
  realm: "alumni",
  clientId: "react-auth",
});

export default keycloak;
