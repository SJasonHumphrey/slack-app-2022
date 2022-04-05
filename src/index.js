import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/auth/Login';
import Register from './components/auth/Register';


const Root = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<App/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  </Router>
)

ReactDOM.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>,
  document.getElementById('root')
);


