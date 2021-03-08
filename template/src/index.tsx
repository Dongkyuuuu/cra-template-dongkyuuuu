import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "@/Components/App";
import store from "@/Store/store";

import "./Helpers/AxiosInterceptor";
import "normalize.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
