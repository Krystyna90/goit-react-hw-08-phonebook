import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App";
import { store} from "./redux/store";

ReactDOM.render(
  <BrowserRouter basename="goit-react-hw-08-phonebook">
    <Provider store={store}>
      <App></App>
    </Provider>
  </BrowserRouter>,

  document.querySelector("#root")
);
