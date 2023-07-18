import React from 'react';
import {debounce} from "lodash";
import {useDispatch} from "react-redux";
import {setSearchKeyword, setFilter} from "../../reducer/todo.slice";

const SearchFilterTodo = () => {
    const dispatch = useDispatch();

    const handleOnchange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchKeyword(e.target.value));
    }, 500)

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(e.target.checked));
    }

    return (
        <div className='search-filter'>
            <input type='text' placeholder='search todo' onChange={(e) =>
                handleOnchange(e)
            }/>
            <div>
                <label htmlFor="r1">Show Completed</label>
                <input type="checkbox" name="completed-todo" id="r1" onChange={(e) =>
                    handleCheck(e)
                }/>
            </div>
        </div>
    );
};

export default SearchFilterTodo;