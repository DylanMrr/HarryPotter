import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
import Header from './components/Header/Header';
import MainPageWrapper from './components/MainPageWrapper/MainPageWrapper';


function App() {
  return(
    <div className='App'>
      <Header />
      <MainPageWrapper />
    </div>
  )
}

export default App;
