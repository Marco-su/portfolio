import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Footer from "./common/footer/Footer";
import Nabvar from "./common/navbar/Navbar";
import Main from "./components/main/MainContent";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Nabvar />
          <Main />
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
