import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register.jsx";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import Company from "./pages/company/Company";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/company/:companyName" element={<Company />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
