import { useEffect, useState } from "react";
import { Videos } from "../components/Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import styles from "./Feed.module.css";
import { useParams } from "react-router-dom";

export function SearchFeed() {
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
            setVideos(data.items);
        });
    }, [searchTerm]);

    return (
        <main className={styles.main}>
            <h1 style={{ marginTop: "10px" }}>
                Search results for: <span style={{ color: "#5707d6" }}>{searchTerm}</span>
            </h1>
            <Videos videos={videos} />
        </main>
    );
}
