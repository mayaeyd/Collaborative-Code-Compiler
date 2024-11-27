import Compiler from "./pages/Compiler";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import "./pages/Register.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import { AuthProvider } from './context/AuthContext';  // Import AuthProvider

function App() {
  return (
    <BrowserRouter>
      {/* Wrap your routes inside the AuthProvider */}
      <AuthProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/compiler" element={<Compiler />}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
