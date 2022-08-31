import React, { useState } from 'react';
import Search from './cloneMain/Search';
import URL from './cloneMain/api/URL';
import './Design.css';
import Video from './cloneMain/Video';
import ListVideos from './cloneMain/ListVideos';


const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState({id: {}, snippet: {}});

  async function videoSubmit(searchTerm) {
    const {data: {items: videos} } = await URL.get("search", {
      params: {
        part: "snippet",
        maxResults: 10000,
        key: "AIzaSyCN_x4N51dn4XWPl2GNwgE6-J4UdmD9Frk",
        q: searchTerm
      }
    }); 

    console.log(videos);
    setVideos(videos);
    setSelectedVideos(videos[0]);
  }

    return (
        <>
            <div className='searchSec'>
              <Search onSubmit={videoSubmit} />
            </div>
            <div className='videoMain'>
                <div className='videoSec'>
                    <Video video={selectedVideos} />
                </div>
                <div className='videoLists'>
                    <ListVideos  videos={videos} onVideoSelect={setSelectedVideos}/>
                </div>
            </div>
        </>
    );
};

export default App;