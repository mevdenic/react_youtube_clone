import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
    demoChannelTitle,
    demoChannelUrl,
    demoThumbnailUrl,
    demoVideoTitle,
    demoVideoUrl,
} from "../utils/constants";

export function VideoCard({
    video: {
        id: { videoId, playlistId },
        snippet,
    },
    children,
}) {
    return (
        <Card sx={{ boxShadow: "none", width: { xs: "100%", sm: "380px", md: "300px" } }}>
            <Link
                to={
                    playlistId
                        ? `/playlist/${playlistId}`
                        : videoId
                        ? `/video/${videoId}`
                        : demoVideoUrl
                }
            >
                <CardMedia
                    image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                    alt={snippet?.title}
                    sx={{
                        width: { xs: "100%", sm: "380px", md: "300px" },
                        height: "170px",
                        borderRadius: "10px",
                    }}
                />
                <CardContent
                    sx={{
                        py: "5px",
                        px: 0,
                        height: "40px",
                    }}
                >
                    <Typography variant="subtitle1" fontWeight="bold">
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </CardContent>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
                <Typography variant="subtitle2" color="gray" sx={{ display: "inline" }}>
                    {children || snippet?.channelTitle || demoChannelTitle}
                </Typography>
            </Link>
        </Card>
    );
}
