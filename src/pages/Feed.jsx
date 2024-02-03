import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Videos } from "../components/Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import styles from "./Feed.module.css";

export function Feed() {
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
            setVideos(data.items);
        });
    }, [selectedCategory]);

    return (
        <div className={styles.feedContainer}>
            <aside className={styles.sidebar}>
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </aside>
            <main className={styles.main}>
                <h1 style={{ marginTop: "10px", marginLeft: "10px" }}>
                    {selectedCategory} <span style={{ color: "#5707d6" }}>videos</span>
                </h1>
                <Videos videos={videos} />
            </main>
        </div>
    );
}
