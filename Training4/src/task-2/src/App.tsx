import React, {useEffect, useReducer, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Country from "./component/country";
import {countryReducer} from "./reducer/country-reducer";
import axios, {AxiosResponse} from "axios";

const base_url = 'https://restcountries.com/v3.1/name/'

type StateType = {
    data?: {},
    isLoading?: boolean,
    error?: any
}

const initState: StateType = {
    data: {},
    error: null
}

function App() {
    const [isLoading, setLoading] = useState<boolean>(true)
    const [country, dispatch] = useReducer(countryReducer, initState);

    useEffect(() => {
        fetchCountry()
    }, [])
    const fetchCountry = () => {
        setLoading(true);
        axios.get(base_url)
            .then((res: AxiosResponse<any>) => {
                setLoading(false);
                dispatch({type: 'SUCCESS', data: res.data[0]})
            })
            .catch((err) => {
                dispatch({type: 'ERROR', data: err})
            })
    }

    const renderCountry = (country: any) => {
        return <Country name={country.name.common} area={country.area.toString()} borders={country.borders} flag={country.flags.png}/>
    }

    return (
        <div className="App">
            <input className="search-bar" placeholder="search a country..."/>
            {!isLoading ? renderCountry(country.data) : <span>Finding...</span>}
        </div>
    );
}

export default App;
