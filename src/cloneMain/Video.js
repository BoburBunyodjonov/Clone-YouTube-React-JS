import React from 'react';
import '../Design.css';

const Video = ({ video: {id: {videoId}, snippet: {title, channelTitle, description } } }) => {

    if (!videoId) return <p className="noResults">No Results</p>;
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;

    return (
        <>
            <div className="videoIframe">
                <iframe 
                    frameBorder="0"
                    allowFullScreen
                    title="Video player"
                    src={videoSrc}
                />
            </div>
            <div className="videoInfo">
                    <h1 className="titleVideo">{title}</h1>
                    <h3 className="channelTitle"><i>{channelTitle}</i></h3>
                    <p className="descriptionVideo">{description}</p>
            </div>
        </>
    );
};

export default Video;