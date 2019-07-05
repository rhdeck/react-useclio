import useOauth from "react-useoauth";
const useClio = ({ location, clientId, redirectUri, state }) => {
  if (!redirectUri) {
    redirectUri = location ? location.href : window.location.href;
  }
  const { code, uri, status, state: returnedState } = useOauth({
    authorizeUrl: "https://app.clio.com/oauth/approval",
    state,
    clientId,
    redirectUri
  });
  return { uri, status, code, state: returnedState };
};
export default useClio;
