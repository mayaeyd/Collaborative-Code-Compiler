import Compiler from "./pages/Compiler";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/compiler" element={<Compiler />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
