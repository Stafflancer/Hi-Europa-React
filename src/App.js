import * as React from 'react';
import {BrowserRouter, Route , Switch} from 'react-router-dom';
import {Router} from "react-router-dom";
import IndexLayout  from "./components/layouts/Admin/Index";
import AuthLayout from "./components/layouts/Admin/Auth";
import PageLayout from "./components/layouts/PageLayout";
import ApiLayout from "./components/layouts/Api/ApiLayout";
import { ToastContainer } from 'react-toastify';


import {Provider} from "react-redux";
import {history} from "./modules/routes";
import { store } from "./redux/store";

function App() {
  return (
      <BrowserRouter>
        <Provider store={store} >
          <Switch>
            <Route history={history}  path="/admin" component={() => (localStorage.getItem('user') ? <IndexLayout /> : <AuthLayout />)} />
            <Route
              path="/api"
              history={history}
              render={() => <ApiLayout />}
            />
            <Route
              path="/"
              history={history}
              render={() => <PageLayout />}
            />
          </Switch>
        </Provider>
      </BrowserRouter>
  );
}

export default App;
