import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
import MainPage from './components/MainPage/MainPage';
import Header from './components/Header/Header';


function App() {
  return(
    <div className='App'>
      <Header />
      <MainPage />
    </div>
  )
}

export default App;
