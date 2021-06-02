import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
    const [words, setWords] = useState('') 

    const history = useHistory();
    
    const clickHandle = () => {
            history.push(`/search?q=${words}`);
    }
    
    return (
        <Form inline>
                <FormControl value={words} onChange={e => setWords(e.target.value)} type="text" placeholder="search by title for your favorite movie" className="mr-sm-2" />
                <Button onClick={clickHandle} variant="outline-info">Search</Button>
            </Form>
    )
}

export default SearchBar