import { SearchBar } from "./SearchBar";
import styles from "./NavBar.module.css";
import { Logo } from "./Logo";

export function NavBar() {
    return (
        <nav className={styles.nav}>
            <Logo />
            <div className={styles.searchContainer}>
                <SearchBar />
            </div>
        </nav>
    );
}
