import React, { useEffect } from "react";
import "./App.css";
import HomeScreenWrapper from "./components/HomeScreenWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import ActionTypes from "./redux/actions/actionTypes";

function App({ language, toggleLanguageAction }) {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    toggleLanguageAction();
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    // <Provider store={store}>
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
  );
}

const mapStateToProps = (state) => {
  const { language } = state.i18nReducer;

  return { language };
};

const mapDispatchToProps = (dispatch) => ({
  toggleLanguageAction: () => dispatch(ActionTypes.toggleLanguageAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
