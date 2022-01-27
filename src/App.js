import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getData} from './redux/reducers/dataReducer'


function App(props) {
  const dispatch = useDispatch();
  
  useEffect(() => {
		dispatch(getData());
	}, [dispatch]);

  const {data} = useSelector((state) => state.data.data)

  return (
    <div className="App">
      {data}
    </div>
  );
}

export default App;
