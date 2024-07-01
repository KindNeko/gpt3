import { React } from "react";
import "./App.css";

import { Footer, Header, Main } from "./layout/export";
function App() {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
