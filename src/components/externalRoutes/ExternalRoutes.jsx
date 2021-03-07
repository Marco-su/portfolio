import { Route, Switch } from "react-router-dom";

const ExternalRoutes = () => {
  return (
    <Switch>
      <Route
        path="/whatsapp"
        component={() => {
          window.location.href = "https://youtube.com";
          return null;
        }}
      />
    </Switch>
  );
};

export default ExternalRoutes;
