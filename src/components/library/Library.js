import './Library.css';
import { useState } from 'react';
import { Searchbar } from '../searchbar/Searchbar';
import { SearchResults } from '../searchresults/SearchResults';

export default function Library() {
    const [results, setResults] = useState([]);

    return (
        <div className="container">
            <div className="searchbar-container">
                <Searchbar setResults={setResults}/>
                <SearchResults results={results}/>  
            </div>
        </div>
    );
}