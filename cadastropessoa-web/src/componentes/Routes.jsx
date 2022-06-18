import { React, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Lista = lazy(() => import("../useCases/pessoa/Lista"));
const Form = lazy(() => import("../useCases/pessoa/Form"));

function Routes() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/form-pessoa"
          component={(props) => <Form {...props} />}
        />
        <Route
          exact
          path="/lista-pessoa"
          component={(props) => <Lista {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default Routes;
