import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function SearchBox({ onSearch }) {
    
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
        setQuery("");
    };

    const handleChange = (e) => {
        setQuery(e.target.value);
    };  

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', margin: '20px' }}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    value={query} 
                    onChange={handleChange} 
                />
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    );
}
