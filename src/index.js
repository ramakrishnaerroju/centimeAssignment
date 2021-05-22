import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./i18n/i18n";
import Loader from "./components/Loader";
import { Provider } from "react-redux";
import store from "./redux/store/store";

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
