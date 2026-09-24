import styles from './SearchBar.module.css'
import { useState } from 'react';


function SearchBar({ searchHandler }) {
const [searchTerm, setSearchTerm] = useState('');

function inputChangeHandler({target}) {
    setSearchTerm(target.value);
}

function submitFormHandler(e) {
    e.preventDefault();
    searchHandler(searchTerm);
}

    return (
        <form className={styles.search} onSubmit={submitFormHandler}>
            <input className={styles.input} type='text' value={searchTerm} onChange={inputChangeHandler}/>
            <button className={styles.button} type='submit'>Search</button>
        </form>
    )
}

export default SearchBar;
