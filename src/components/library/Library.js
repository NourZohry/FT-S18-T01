import './Library.css';
import { useState } from 'react';
import { Searchbar } from '../searchbar/Searchbar';
import { SearchResults } from '../searchresults/SearchResults';
import { Shelf } from '../shelf/Shelf';

export default function Library() {
    const [results, setResults] = useState([]);
    const [shelfBooks, setShelfBooks] = useState([]);


    
    const [showSearch, setShowSearch] = useState(false);

    

    return (
        <div className="container">
            {showSearch ? 
            <div className="searchbar-container">
                <Searchbar setResults={setResults} setShowSearch={setShowSearch}/>
                <SearchResults results={results} setShelfBooks={setShelfBooks} shelfBooks={shelfBooks}/>  
            </div>
            :
            <div className="shelf">
                <Shelf setShelfBooks={setShelfBooks} shelfBooks={shelfBooks} setShowSearch={setShowSearch}/>
            </div>
            }
        </div>
    );
}