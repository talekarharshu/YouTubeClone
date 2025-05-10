import React, { useState } from 'react';
import './Home.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';
import { Link } from 'react-router-dom';

const Home = ({ sidebar, searchResults }) => {
  const [category, setCateory] = useState(0);

  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCateory={setCateory} />
      <div className={`container ${sidebar ? '' : 'large-container'}`}>
        {searchResults && searchResults.length > 0 ? (
          <div className="video-grid">
            {searchResults.map((video) => (
              <Link
                key={video.id.videoId}
                to={`/video/${video.snippet.categoryId || 'default'}/${video.id.videoId}`}
                className="video-card"
              >
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className="thumbnail"
                />
                <div className="video-info">
                  <h3 className="video-title">{video.snippet.title}</h3>
                  <p className="video-channel">{video.snippet.channelTitle}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <Feed category={category} />
        )}
      </div>
    </>
  );
};

export default Home;
