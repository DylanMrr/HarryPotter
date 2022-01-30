import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
import Header from './components/Header/Header';
import MainPageWrapper from './pages/MainPageWrapper/MainPageWrapper';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';


function App() {
  return(
    <div className='App'>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<MainPageWrapper Child="/"/>}/>
          <Route path = "/person/:name" element={<MainPageWrapper Child="/person/:name"/>} />
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App;
