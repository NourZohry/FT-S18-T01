import React from 'react'
import "./SearchResults.css"
import { ShowBook } from '../showbook/ShowBook';
import 'bootstrap/dist/css/bootstrap.min.css';


export const SearchResults = ({ results }) => {
    if (results === []) { return; }
    return (
        <div className="results-list row">
            {
                results.map((result, id) => {
                    return <ShowBook result={result} key={id} />;
                })
            }
        </div>
    )
}
