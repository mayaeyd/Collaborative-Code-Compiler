import './styles/App.css';
import './pages/Register.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/Register.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
