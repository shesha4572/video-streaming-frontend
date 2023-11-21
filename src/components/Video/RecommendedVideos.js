import './RecommendedVideos.css';
import VideoCard from './VideoCard';
import React, { useState, useEffect } from 'react';

function RecommendedVideos() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://34.80.145.30:8080/api/v1/video/search/a`);
                const contentType = response.headers.get('content-type');
    
                if (contentType && contentType.includes('application/json')) {
                    const data = await response.json();
                    setVideos(data);
                    setLoading(false);
                } else {
                    new Error(`Unexpected response type: ${contentType}`);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);
    return (
        <div className='recommendedVideos'>
            <h2>
                Recommended Videos
            </h2>
            <div className="recommendedVideos_videos">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {videos.map((video) => (
                <div key = {video.internalFileId} >
                    <VideoCard
                        title={video.title}
                        views={video.viewCounter}
                        timestamp={video.uploadedOn}
                        channelImage="https://yt3.googleusercontent.com/7q9t5rjeujEZYqY1xMLn0mvT4Zc6MaZBYgtseDL2_Zh42AOhMze8ep7BUKdR5FnxytMy3csj=s176-c-k-c0x00ffffff-no-rj"
                        channel={video.ownerDisplayName}
                        image={video.thumbnailLink}
                    />
                    <hr />
                </div>
            ))}
            </div>
            {/* <div className="recommendedVideos_videos">
                <VideoCard
                    title="Machine Learning Full Course"
                    views="2M views"
                    timestamp="2 days ago"
                    channelImage="https://yt3.googleusercontent.com/7q9t5rjeujEZYqY1xMLn0mvT4Zc6MaZBYgtseDL2_Zh42AOhMze8ep7BUKdR5FnxytMy3csj=s176-c-k-c0x00ffffff-no-rj"
                    channel="Simplilearn"
                    image="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
                />
                <VideoCard
                    title="Machine Learning Full Course"
                    views="2M views"
                    timestamp="2 days ago"
                    channelImage="https://yt3.googleusercontent.com/7q9t5rjeujEZYqY1xMLn0mvT4Zc6MaZBYgtseDL2_Zh42AOhMze8ep7BUKdR5FnxytMy3csj=s176-c-k-c0x00ffffff-no-rj"
                    channel="Simplilearn"
                    image="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
                />
                <VideoCard
                    title="Machine Learning Full Course"
                    views="2M views"
                    timestamp="2 days ago"
                    channelImage="https://yt3.googleusercontent.com/7q9t5rjeujEZYqY1xMLn0mvT4Zc6MaZBYgtseDL2_Zh42AOhMze8ep7BUKdR5FnxytMy3csj=s176-c-k-c0x00ffffff-no-rj"
                    channel="Simplilearn"
                    image="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
                />
                <VideoCard
                    title="Machine Learning Full Course"
                    views="2M views"
                    timestamp="2 days ago"
                    channelImage="https://yt3.googleusercontent.com/7q9t5rjeujEZYqY1xMLn0mvT4Zc6MaZBYgtseDL2_Zh42AOhMze8ep7BUKdR5FnxytMy3csj=s176-c-k-c0x00ffffff-no-rj"
                    channel="Simplilearn"
                    image="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
                />
                <VideoCard
                    title="Machine Learning Full Course"
                    views="2M views"
                    timestamp="2 days ago"
                    channelImage="https://yt3.googleusercontent.com/7q9t5rjeujEZYqY1xMLn0mvT4Zc6MaZBYgtseDL2_Zh42AOhMze8ep7BUKdR5FnxytMy3csj=s176-c-k-c0x00ffffff-no-rj"
                    channel="Simplilearn"
                    image="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
                />
                <VideoCard
                    title="Machine Learning Full Course"
                    views="2M views"
                    timestamp="2 days ago"
                    channelImage="https://yt3.googleusercontent.com/7q9t5rjeujEZYqY1xMLn0mvT4Zc6MaZBYgtseDL2_Zh42AOhMze8ep7BUKdR5FnxytMy3csj=s176-c-k-c0x00ffffff-no-rj"
                    channel="Simplilearn"
                    image="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
                />
                <VideoCard
                    title="Machine Learning Full Course"
                    views="2M views"
                    timestamp="2 days ago"
                    channelImage="https://yt3.googleusercontent.com/7q9t5rjeujEZYqY1xMLn0mvT4Zc6MaZBYgtseDL2_Zh42AOhMze8ep7BUKdR5FnxytMy3csj=s176-c-k-c0x00ffffff-no-rj"
                    channel="Simplilearn"
                    image="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
                />
                <VideoCard
                    title="Machine Learning Full Course"
                    views="2M views"
                    timestamp="2 days ago"
                    channelImage="https://yt3.googleusercontent.com/7q9t5rjeujEZYqY1xMLn0mvT4Zc6MaZBYgtseDL2_Zh42AOhMze8ep7BUKdR5FnxytMy3csj=s176-c-k-c0x00ffffff-no-rj"
                    channel="Simplilearn"
                    image="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
                />
                <VideoCard
                    title="Machine Learning Full Course"
                    views="2M views"
                    timestamp="2 days ago"
                    channelImage="https://yt3.googleusercontent.com/7q9t5rjeujEZYqY1xMLn0mvT4Zc6MaZBYgtseDL2_Zh42AOhMze8ep7BUKdR5FnxytMy3csj=s176-c-k-c0x00ffffff-no-rj"
                    channel="Simplilearn"
                    image="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
                />
                <VideoCard
                    title="Machine Learning Full Course"
                    views="2M views"
                    timestamp="2 days ago"
                    channelImage="https://yt3.googleusercontent.com/7q9t5rjeujEZYqY1xMLn0mvT4Zc6MaZBYgtseDL2_Zh42AOhMze8ep7BUKdR5FnxytMy3csj=s176-c-k-c0x00ffffff-no-rj"
                    channel="Simplilearn"
                    image="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
                />
            </div> */}
        </div>
    )
}

export default RecommendedVideos