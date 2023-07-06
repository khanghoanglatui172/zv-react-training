import React, {useEffect, useReducer, useState, useCallback} from 'react';
import './App.css';
import {Joke} from "./interfaces/joke";
import axios, {AxiosResponse} from "axios";
import JokeCard from "./component/joke-card";
import {jokeReducer} from "./reducer/joke-reducer";
import throttle from "lodash.throttle";
const base_url = 'https://official-joke-api.appspot.com/random_ten'

type StateType = {
    data?: Joke[],
    isLoading?: boolean,
    error?: any
}

const initState: StateType = {
    data: [],
    error: null
}

function App() {
    const [isLoading, setLoading] = useState<boolean>(true)
    const [jokes, dispatch] = useReducer(jokeReducer, initState)
    useEffect(() => {
        throttleApiCall()
    }, [])

    const fetchJokes = () => {
        setLoading(true);
        axios.get(base_url)
            .then((res: AxiosResponse<Joke[]>) => {
                setLoading(false);
                dispatch({type: 'SUCCESS', data: res.data})
            })
            .catch((err) => {
                dispatch({type: 'ERROR', data: err})
            })
    }
    const throttleApiCall = useCallback(throttle(fetchJokes, 5000),[])

    const renderJokes = (jokes: Joke[]) => {
        return jokes.map((joke) => <JokeCard key={joke.id} id={joke.id} type={joke.type} setup={joke.setup}
                                                    punchline={joke.punchline}/>)
    }

    return (
        <div className="App">
            <div className="card-container">
                {renderJokes(jokes.data)}
            </div>
            {jokes.error && <p>Its not ok sir SOS</p>}
            {isLoading && <p>Loading ...</p>}
            <button onClick={throttleApiCall}>Get more jokes</button>
        </div>
    );
}

export default App;
