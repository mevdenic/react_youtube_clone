import { useEffect, useState } from "react";
import { Videos } from "../components/Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import styles from "./Feed.module.css";
import { useParams } from "react-router-dom";

export function PlaylistDetail() {
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`playlistItems?part=snippet&playlistId=${id}`).then((data) => {
            setVideos(data.items);
        });
    }, [id]);

    return (
        <main className={styles.main}>
            <h1 style={{ marginTop: "10px", marginLeft: "10px", color: "#5707d6" }}>Playlist:</h1>
            <Videos videos={videos} />
        </main>
    );
}
