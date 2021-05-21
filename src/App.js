import React, { Suspense } from "react";
import "./App.css";
import HomeScreenWrapper from "./components/HomeScreenWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage("de");
  };

  return (
    <Provider store={store}>
      <div className="App">
        <div className="header-container">
          <header className="App-header">
            <img src="https://centime.com/images/logo.png" alt="centime logo" />
          </header>
          <button className="btn btn-primary" onClick={changeLanguage}>
            Change language
          </button>
        </div>

        <div className="main-content">
          <HomeScreenWrapper />
        </div>
      </div>
    </Provider>
  );
}

export default App;
