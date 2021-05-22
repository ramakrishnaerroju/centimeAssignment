import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./i18n/i18n";
import Loader from "./components/Loader";
import { Provider } from "react-redux";
import store from "./redux/store/store";

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById("root")
);
