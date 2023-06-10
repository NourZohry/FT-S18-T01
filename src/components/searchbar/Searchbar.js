import React, { useState } from 'react'
import './Searchbar.css'

export const Searchbar = ({setResults}) => {

    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://openlibrary.org/search.json?q=" + value)
        .then((response) => response.json())
        .then(json => {
            // console.log(json);
            const results = json.docs;
            console.log(results);
            // return results;
            setResults(results);
        });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <div className='searchbar-wrapper'>
            <input placeholder='Search...' 
            value={input} 
            onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}
