import './SearchPage.css';
import React, { useState, useEffect } from 'react';
import VideoRow from './VideoRow';

function SearchPage({ searchString }) {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://early-pugs-stand.loca.lt/api/v1/video/search/${searchString}`);
                const contentType = response.headers.get('content-type');
    
                if (contentType && contentType.includes('application/json')) {
                    const data = await response.json();
                    setVideos(data);
                    setLoading(false);
                } else {
                    throw new Error(`Unexpected response type: ${contentType}`);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            }
        };
    
        fetchData();
    }, [searchString]);
    

    return (
        <div className='searchPage'>
            <hr />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {videos.map((video) => (
                <div key = {video.internalField}>
                    <hr />
                    <VideoRow
                        title={video.title}
                        views={video.viewCounter}
                        timestamp={video.uploadedOn}
                        channel={video.ownerDisplayName}
                        description={video.desc}
                        image={video.thumbnailLink}
                        internalField={video.internalField}
                    />
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default SearchPage;
