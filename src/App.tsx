import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Error from "./components/Error";
import Success from "./components/Success";
import SignUpSuccess from "./components/SignUpSuccess";

export default function App() {
  return (
    <Router>
      <nav>
        <button>
          {" "}
          <Link to="/signup"> Signup </Link>{" "}
        </button>
        <button>
          {" "}
          <Link to="/signin"> SignIn </Link>{" "}
        </button>
      </nav>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/error" element={<Error />} />
        <Route path="/success" element={<Success />} />
        <Route path="/signup-success" element={<SignUpSuccess />} />
      </Routes>
    </Router>
  );
}
