import "./App.css";
import HomeScreenWrapper from "./components/HomeScreenWrapper";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://centime.com/images/logo.png" alt="centime logo" />
      </header>
      <div className="main-content">
        <HomeScreenWrapper></HomeScreenWrapper>
      </div>
    </div>
  );
}

export default App;
