import React from 'react'
import "./DisplayBooks.css"
import { ShowBook } from '../showbook/ShowBook';
import 'bootstrap/dist/css/bootstrap.min.css';


export const DisplayBooks = ({ results, setShelfBooks, shelfBooks }) => {
    if (results === []) { return; }
    return (
        // <div className="results-list row">
        <div className='results-list row d-flex justify-content-center align-items-center'>
            {
                results.map((result, id) => {
                    return <ShowBook result={result} key={id}  setShelfBooks={setShelfBooks} shelfBooks={shelfBooks}/>;
                })
            }
        </div>
    )
}
