import './Library.css';
import { useEffect, useState } from 'react';
import { Searchbar } from '../searchbar/Searchbar';
import { SearchResults } from '../searchresults/SearchResults';
import { Shelf } from '../shelf/Shelf';

export default function Library() {
    const [results, setResults] = useState([]);
    const [showSearch, setShowSearch] = useState(false);

    const [shelfBooks, setShelfBooks] = useState(() => {
        const localData = localStorage.getItem('shelf-books');
        return localData ? JSON.parse(localData) : []
    });
    useEffect(() => {
        localStorage.setItem('shelf-books', JSON.stringify(shelfBooks))
    }, [shelfBooks]);



    return (
        <div className="container">
            {showSearch &&
                <div className="searchbar-container">
                    <Searchbar setResults={setResults} setShowSearch={setShowSearch} />
                    <SearchResults results={results} setShelfBooks={setShelfBooks} shelfBooks={shelfBooks} />
                </div>
            }
            {!showSearch &&
                <div className="shelf">
                    <Shelf setShelfBooks={setShelfBooks} shelfBooks={shelfBooks} setShowSearch={setShowSearch} />
                </div>
            }
        </div>
    );
}