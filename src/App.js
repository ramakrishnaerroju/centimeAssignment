import "./App.css";
import HomeScreenWrapper from "./components/HomeScreenWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src="https://centime.com/images/logo.png" alt="centime logo" />
        </header>
        <div className="main-content">
          <HomeScreenWrapper />
        </div>
      </div>
    </Provider>
  );
}

export default App;
