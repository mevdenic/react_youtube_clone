import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { Videos } from "../components/Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import styles from "./VideoDetail.module.css";

export function VideoDetail() {
    const [videoDetail, setVideoDetail] = useState(null);
    const [videos, setVideos] = useState(null);
    const [descriptionOpen, setDescriptionOpen] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
            setVideoDetail(data.items[0]);
        });
        fetchFromAPI(`search?part=id,snippet&type=video&relatedToVideoId=${id}`).then((data) => {
            setVideos(data.items);
        });
    }, [id]);

    if (!videoDetail) return <h1>Loading...</h1>;

    const {
        snippet: { title, channelTitle, channelId, description },
        statistics: { likeCount, viewCount },
    } = videoDetail;

    return (
        <div className={styles.container}>
            <main>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${id}`}
                    className={styles.reactPlayer}
                    controls
                />
                <h2>{title}</h2>
                <div className={styles.statContainer}>
                    <Link to={`/channel/${channelId}`}>
                        <h3 style={{ fontWeight: "400" }}>{channelTitle}</h3>
                    </Link>
                    <p>{parseInt(likeCount).toLocaleString()} likes</p>
                </div>
                <div className={styles.descriptionContainer}>
                    <p>{parseInt(viewCount).toLocaleString()} views</p>
                    <p>
                        {!descriptionOpen
                            ? description.split(" ").slice(0, 50).join(" ")
                            : description}
                    </p>
                    {description.split(" ").length > 50 ? (
                        <button
                            className={styles.descriptionToggle}
                            onClick={() => setDescriptionOpen(!descriptionOpen)}
                        >
                            {descriptionOpen ? "...Show less" : "Show more..."}
                        </button>
                    ) : null}
                </div>
            </main>
            <aside className={styles.relatedList}>
                {videos ? <Videos videos={videos} /> : <h2>Error fetching related videos...</h2>}
            </aside>
        </div>
    );
}
