import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";
export function SearchBar() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (query) {
            navigate(`/search/${query}`);
            setQuery("");
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <input
                className={styles.searchBar}
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className={styles.searchButton}>
                <Search type="submit" sx={{ color: "#5707D6" }} />
            </button>
        </form>
    );
}
