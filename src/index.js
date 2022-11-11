import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

import App from "./components/App";
import { store, persistor } from "./redux/store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App></App>
      </PersistGate>
    </Provider>
  </BrowserRouter>,

  document.querySelector("#root")
);
