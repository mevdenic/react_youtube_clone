import { Link } from "react-router-dom";

export function Logo() {
    return (
        <Link to="/">
            <img src="/logo.png" alt="logo" height="100%" />
        </Link>
    );
}
