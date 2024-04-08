import "./App.css";
import Header from "./components/Header";
//import AddMedia from "./components/AddMedia";
import gallery from "./components/Gallery";
import Home from "./components/Home"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/home" Component={Home} /> 
          <Route path="/gallery" Component={gallery} />
          
          
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
