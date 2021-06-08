import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexLayout from "./components/layouts/Admin/Index";
import AuthLayout from "./components/layouts/Admin/Auth";
import PageLayout from "./components/layouts/PageLayout";
import { Suspense } from "react";

import { Provider } from "react-redux";
import { history } from "./modules/routes";
import { store } from "./redux/store";

function App() {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route
              history={history}
              path="/admin"
              component={() =>
                localStorage.getItem("user") ? <IndexLayout /> : <AuthLayout />
              }
            />
            <Route
              path="/:locale(fr|cn)?"
              history={history}
              render={() => <PageLayout />}
            />
          </Switch>
        </Provider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
