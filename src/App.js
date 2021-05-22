import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/homepage/HomePageWrapper";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import ActionTypes from "./redux/actions/actionTypes";
import { Button } from "./components/custom-elements";
import Header from "./components/header/header";

function App({ language, toggleLanguageAction }) {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    toggleLanguageAction();
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <div className="App">
      <div className="header-container">
        <Header />
        <Button btnText="Change language" callback={changeLanguage} />
      </div>

      <div className="main-content">
        <HomePage />
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
