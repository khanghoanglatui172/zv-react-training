import React, {useEffect, useState} from 'react';

interface SearchCriteria {
    name: string;
    status: boolean
}

type SearchFilterTodoProps = {
    handleSearchFilter: ({name, status}: SearchCriteria) => void,
}
const SearchFilterTodo = ({handleSearchFilter}: SearchFilterTodoProps) => {

    const [checking, setChecking] = useState<boolean>(false)
    const [name, setName] = useState<string>('')

    useEffect(() => {
        handleSearchFilter({name, status: checking});
    }, [name, checking])

    return (
        <div className='search-filter'>
            <input type='text' placeholder='search todo' onChange={(e) =>
                setName(e.target.value)
            }/>
            <div>
                <label htmlFor="r1">Show Completed</label>
                <input type="checkbox" name="completed-todo" id="r1" onChange={(e) =>
                    setChecking(e.target.checked)
                }/>
            </div>
        </div>
    );
};

export default SearchFilterTodo;