import React, {useCallback, useReducer, useState} from 'react';
import './App.css';
import Country from "./component/country";
import {countryReducer} from "./reducer/country-reducer";
import axios, {AxiosResponse} from "axios";
import debounce from "lodash.debounce";

const base_url = 'https://restcountries.com/v3.1/name'

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
    const [search, setSearch] = useState<string>('')

    const fetchCountry = (country: string) => {
        setLoading(true);
        axios.get(`${base_url}/${country}`)
            .then((res: AxiosResponse<any>) => {
                setLoading(false);
                dispatch({type: 'SUCCESS', data: res.data[0]})
            })
            .catch((err) => {
                dispatch({type: 'ERROR', data: err})
            })
    }

    const handleSearch = (e:  React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
            searchCountry(e.target.value);
    }

    const searchCountry = useCallback(debounce(fetchCountry, 1000),[])


    const renderCountry = (country: any) => {
        return <Country name={country.name.common} area={country.area.toString()} borders={country.borders} flag={country.flags.png}/>
    }

    return (
        <div className="App">
            <input value={search} onChange={handleSearch} className="search-bar" placeholder="search a country..."/>
            {!isLoading ? renderCountry(country.data) : <p>Finding....</p>}
        </div>
    );
}

export default App;
