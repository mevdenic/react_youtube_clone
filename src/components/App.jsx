import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Feed } from "../pages/Feed";
import { VideoDetail } from "../pages/VideoDetail";
import { ChannelDetail } from "../pages/ChannelDetail";
import { SearchFeed } from "../pages/SearchFeed";
import { PlaylistDetail } from "../pages/PlaylistDetail";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetail />} />
                <Route path="/channel/:id" element={<ChannelDetail />} />
                <Route path="/playlist/:id" element={<PlaylistDetail />} />
                <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
