import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../data";

const Search = () => {
  const { input } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const searchRes = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&type=video&maxResults=10&key=${API_KEY}`
      );
      const searchData = await searchRes.json();
      const videoIds = searchData.items.map((item) => item.id.videoId).join(",");

      const detailsRes = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoIds}&key=${API_KEY}`
      );
      const detailsData = await detailsRes.json();
      setVideos(detailsData.items);
    };

    fetchVideos();
  }, [input]);

  return (
    <div className="search-container">
      {/* Left Section - Video Display */}
      <div className="video-play">
        {videos[0] && (
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${videos[0].id}`}
            title={videos[0].snippet.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
      </div>

      {/* Right Section - Video List */}
      <div className="video-list">
        {videos.map((video) => (
          <div key={video.id} className="video-card" onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, "_blank")}>
            <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
            <div className="video-info">
              <h4>{video.snippet.title}</h4>
              <p>{video.snippet.channelTitle}</p>
              <p>{video.statistics.viewCount} views</p>
              <p>{video.snippet.publishedAt.slice(0, 10)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
