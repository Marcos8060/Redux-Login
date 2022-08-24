import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/features/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Profile from './components/Profile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <React.StrictMode>
    <Provider store={store}>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
      </Routes>
    </Provider>
  </React.StrictMode>
  </Router>

);
