import { useState } from "react";

const Search = ({ onSearch }) => {

    const [query, setQuery] = useState('');

    const handleClear = () =>{
        setQuery('');
        onSearch('');
    };

    return(
        <div className="search">
            <label htmlFor="query">Buscar:</label>
            <input 
                type="search" 
                name="query" 
                id="query" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleClear}>Limpar</button>
            <button onClick={() => onSearch(query)}>Procurar</button>
        </div>
    );
};

export default Search;