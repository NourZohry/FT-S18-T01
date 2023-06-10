import React from 'react'
import "./SearchResults.css"
import { ShowBook } from '../showbook/ShowBook';
import 'bootstrap/dist/css/bootstrap.min.css';


export const SearchResults = ({ results, setShelfBooks, shelfBooks }) => {
    if (results === []) { return; }
    return (
        <div className="results-list row">
            {
                results.map((result, id) => {
                    return <ShowBook result={result} key={id}  setShelfBooks={setShelfBooks} shelfBooks={shelfBooks}/>;
                })
            }
        </div>
    )
}
