import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Compiler from "./pages/Compiler";
import { AuthProvider } from './context/AuthContext';  
import SaveProvider from "./context/saveContext";  

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SaveProvider>  
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
            <Route path="/compiler" element={<Compiler />} />
          </Routes>
        </SaveProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
