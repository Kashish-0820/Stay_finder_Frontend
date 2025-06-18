import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home"; 



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />         {/* homepage */}
        <Route path="/register" element={<Register />} />  {/* Register page */}
        <Route path="/login" element={<Login />} />       {/* Login page */}
      </Routes>
    </Router>
  );
}



export default App;
