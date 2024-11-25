import "./styles/App.css";
import "./pages/Register.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { AuthProvider } from './context/AuthContext';  // Import AuthProvider

function App() {
  return (
    <BrowserRouter>
      {/* Wrap your routes inside the AuthProvider */}
      <AuthProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
