import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/home/home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}></Route>     

      <Route path='*' element={<Home/>} ></Route>

      </Routes> 
    </div>
    </BrowserRouter>
  );
}

export default App;
