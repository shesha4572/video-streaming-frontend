import React from 'react';
import './SearchPage.css';
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className="searchPage_filter">
                <TuneIcon />
                <h2>FILTER </h2>
            </div>
            <hr />
            <ChannelRow
                image="https://yt3.googleusercontent.com/7q9t5rjeujEZYqY1xMLn0mvT4Zc6MaZBYgtseDL2_Zh42AOhMze8ep7BUKdR5FnxytMy3csj=s176-c-k-c0x00ffffff-no-rj"
                channel="Simpililearn"
                verified
                subs="23K"
                noOfVideos={301}
                description="You can find awesome videos here"
            />
            <hr />
            <VideoRow
                views="1.2M"
                subs="23K"
                description="Learn Web Development in 10 minutes!!"
                timestamp="59 seconds ago"
                channel="Simpililearn"
                title="Let's build a clone of TikTok with ReactJs"
                image="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
            />
            <VideoRow
                views="1.2M"
                subs="23K"
                description="Learn Web Development in 10 minutes!!"
                timestamp="59 seconds ago"
                channel="Simpililearn"
                title="Let's build a clone of TikTok with ReactJs"
                image="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
            />
            <VideoRow
                views="1.2M"
                subs="23K"
                description="Learn Web Development in 10 minutes!!"
                timestamp="59 seconds ago"
                channel="Simpililearn"
                title="Let's build a clone of TikTok with ReactJs"
                image="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
            />
            <VideoRow
                views="1.2M"
                subs="23K"
                description="Learn Web Development in 10 minutes!!"
                timestamp="59 seconds ago"
                channel="Simpililearn"
                title="Let's build a clone of TikTok with ReactJs"
                image="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
            />
            <VideoRow
                views="1.2M"
                subs="23K"
                description="Learn Web Development in 10 minutes!!"
                timestamp="59 seconds ago"
                channel="Simpililearn"
                title="Let's build a clone of TikTok with ReactJs"
                image="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
            />
            <VideoRow
                views="1.2M"
                subs="23K"
                description="Learn Web Development in 10 minutes!!"
                timestamp="59 seconds ago"
                channel="Simpililearn"
                title="Let's build a clone of TikTok with ReactJs"
                image="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
            />
            <VideoRow
                views="1.2M"
                subs="23K"
                description="Learn Web Development in 10 minutes!!"
                timestamp="59 seconds ago"
                channel="Simpililearn"
                title="Let's build a clone of TikTok with ReactJs"
                image="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
            />
        </div>
    )
}

export default SearchPage