import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Videos } from "../components/Videos";
import { ChannelCard } from "../components/ChannelCard";
import { Box } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
export function ChannelDetail() {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
            setChannelDetail(data?.items[0]);
        });
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
            setVideos(data?.items);
        });
    }, [id]);
    return (
        <Box minHeight="88dvh">
            <Box>
                <div
                    style={{
                        background:
                            "linear-gradient(225deg, rgba(2,0,36,1) 0%, rgba(87,7,214,1) 45%, rgba(0,126,152,1) 100%)",
                        zIndex: 999,
                        height: "300px",
                    }}
                />
                <ChannelCard channelDetail={channelDetail} id={id} margin={"-90px auto 0 auto"} />
            </Box>
            <Box>
                <Videos videos={videos} />
            </Box>
        </Box>
    );
}
