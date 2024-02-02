import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

export function ChannelCard({ channelDetail, margin, id }) {
    console.log(id);
    return (
        <Box
            sx={{
                boxShadow: "none",
                borderRadius: "20px",
                width: { xs: "100%", sm: "380px", md: "300px" },
                margin: margin,
            }}
        >
            <Link to={id ? `/channel/${id}` : `/channel/${channelDetail?.id?.channelId}`}>
                <CardContent
                    sx={{
                        textAlign: "center",
                    }}
                >
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{
                            height: "180px",
                            width: "180px",
                            borderRadius: "50%",
                            border: "1px solid #e3e3e3",
                            m: "0 auto",
                            mb: "10px",
                        }}
                    />
                    <Typography variant="h6">{channelDetail?.snippet?.title}</Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography>
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}{" "}
                            Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    );
}
