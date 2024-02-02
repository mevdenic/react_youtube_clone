import { VideoCard } from "./VideoCard";
import { ChannelCard } from "./ChannelCard";
import styles from "./Videos.module.css";

export function Videos({ videos }) {
    return (
        <ul className={styles.videoList}>
            {videos?.map((item, i) => (
                <li key={i}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.kind === "youtube#playlistItem" ? (
                        <VideoCard video={item} playlistName={item.snippet.title} />
                    ) : null}
                    {item.id.channelId && (
                        <ChannelCard channelDetail={item} channelId={item?.id?.channelId} />
                    )}
                    {item.id.playlistId && (
                        <VideoCard video={item}>
                            <span>Playlist</span>
                            <span style={{ display: "inline-block", padding: "3px" }}>
                                <img
                                    src="/playlist.png"
                                    alt="playlist icon"
                                    style={{ height: "15px" }}
                                />
                            </span>
                        </VideoCard>
                    )}
                </li>
            ))}
        </ul>
    );
}
