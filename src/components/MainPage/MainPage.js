import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getData} from '../../redux/reducers/dataReducer'
import Character from '../Character/Character';

import './MainPage.css'

export default () => {
    const dispatch = useDispatch();
    useEffect(() => {
		dispatch(getData());
	}, [dispatch]);

    const data = useSelector((state) => state.data)
    console.log(data.loading)
    const loading = data.loading
    
    if (loading){
        return (
        <div>
            Загрузка
        </div>
        )
    }
    if (data.error){
        return (
        <div>
            ошибка
        </div>
        )
    }
    return data.data.map(item => (<Character name={item.name} house={item.house} imageurl={item.image}/>))
    return(<></>)
    /*return (
        <div className="App">
        <div>
            {data[0].name}
        </div>
        <MainPage />
        </div>
    );*/
}