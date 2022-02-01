import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import Header from './components/Header/Header';
import MainPageWrapper from './pages/MainPageWrapper/MainPageWrapper';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import { getData } from './redux/reducers/dataReducer';


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getData());
  }, [dispatch]);
  
  return(
    <div className='App'>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<MainPageWrapper Child="/"/>}/>
          <Route path = "/person/:name" element={<MainPageWrapper Child="/person/:name"/>} />
          <Route path = "/all" element={<MainPageWrapper Child="/all"/>} />
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App;
