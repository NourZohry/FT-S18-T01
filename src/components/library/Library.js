import './Library.css';
import { useEffect, useState } from 'react';
import { Searchbar } from '../searchbar/Searchbar';
import { DisplayBooks } from '../displaybooks/DisplayBooks';
import { Shelf } from '../shelf/Shelf';

export default function Library() {
    const [results, setResults] = useState([]);
    const [showSearch, setShowSearch] = useState(false);

    const [shelfBooks, setShelfBooks] = useState(() => {
        const localData = localStorage.getItem('shelf-books');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem('shelf-books', JSON.stringify(shelfBooks))
    }, [shelfBooks]);



    return (
        <div className="container mt-1 mb-5">
            {showSearch &&
                <div className="searchbar-container">
                    <Searchbar setResults={setResults} setShowSearch={setShowSearch} />
                    <DisplayBooks results={results} setShelfBooks={setShelfBooks} shelfBooks={shelfBooks} />
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