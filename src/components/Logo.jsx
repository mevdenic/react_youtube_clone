import { Link } from "react-router-dom";

export function Logo() {
    return (
        <Link to="/" style={{ display: "contents" }}>
            <img src="/logo.png" alt="logo" height="100%" />
        </Link>
    );
}
