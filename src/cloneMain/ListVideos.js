import React from 'react';
import SideVideos from './SideVideos';

const ListVideos = ({ videos, onVideoSelect }) => {
    const videoLists = videos.map(video => (
        <SideVideos
            onVideoSelect={onVideoSelect}
            key={video.id.videoId}
            video={video}
        />
    ));
    return (
        <>
            {videoLists};
        </>
    );
};

export default ListVideos;