import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from "./pages/Register";
import Login from "./pages/Login";


function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
