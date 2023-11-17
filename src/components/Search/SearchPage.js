import './SearchPage.css';
import React, { useState, useEffect } from 'react';
import VideoRow from './VideoRow';

function SearchPage() {
    const [searchString, setSearchString] = useState('');
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async (searchTerm) => {
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

    const handleSearchClick = () => {
        fetchData(searchString);
    };

    const handleInputChange = (event) => {
        setSearchString(event.target.value);
    };

    useEffect(() => {
        fetchData(searchString);
    }, [searchString]);

    return (
        <div className='searchPage'>
            <div className="search-bar">
                <input type="text" value={searchString} onChange={handleInputChange} />
                <button onClick={handleSearchClick}>Search</button>
            </div>
            <hr />
            {loading && <p>Loading...</p>}
            {videos.map((video) => (
                <div key={video.internalFileId}>
                    <hr />
                    <VideoRow
                        title={video.title}
                        views={video.viewCounter}
                        timestamp={video.uploadedOn}
                        channel={video.ownerDisplayName}
                        description={video.desc}
                        image={video.thumbnailLink}
                    />
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default SearchPage;
