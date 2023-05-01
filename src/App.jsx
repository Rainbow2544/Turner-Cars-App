import Home from "./pages/Home"
import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {BrowserRouter as Router,Routes,Route,Navigate, Outlet} from "react-router-dom";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
