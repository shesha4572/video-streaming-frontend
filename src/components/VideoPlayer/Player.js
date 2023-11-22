import React, { useState, useEffect, useRef } from 'react';
import { Button, Container, Slider, Tooltip, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import Popover from "@mui/material/Popover";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import '../Video/RecommendedVideos.css'
import VideoCard from '../Video/VideoCard';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {channel, logo} from "../Layout/Header";
import Cookies from 'js-cookie';
import Paper from "@mui/material/Paper";

const baseURL = 'http://35.221.224.70:8080/api/v1';

function valuelabelcomponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}


function formatDate(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
}

function Test() {
    const playerRef = useRef(null);
    const { internalFileId } = useParams()
    const [playbackRate, setPlaybackRate] = React.useState(1);
    const [isPlaying, setIsPlaying] = React.useState(true);
    const [volume, setVolume] = React.useState(1);
    const [currentTime, setCurrentTime] = React.useState(0);
    const [duration, setDuration] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [showControls, setShowControls] = React.useState(true);
    const [showMiddleControls, setShowMiddleControls] = React.useState(true);

    const handleMouseEnter = () => {
        setShowControls(true);
        setShowMiddleControls(true);
    };

    const handleMouseLeave = () => {
        setShowControls(false);
        setShowMiddleControls(false);
    };

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
        setShowControls(true);
        setShowMiddleControls(true);
        setContainerOpacity(isPlaying ? 1 : 0.5);

    };

    const handleFastForward = () => {
        const newTime = currentTime + 10;
        playerRef.current.seekTo(newTime);
    };

    const handleFastRewind = () => {
        const newTime = currentTime - 10;
        playerRef.current.seekTo(newTime);
    };

    const handleVolumeChange = (event, newValue) => {
        setVolume(newValue);
    };

    const handleSliderChange = (event, newValue) => {
        setCurrentTime(newValue);
    };

    const handleSliderSeek = (event, newValue) => {
        playerRef.current.seekTo(newValue);
    };

    const handleFullscreenToggle = () => {
        const player = playerRef.current.getInternalPlayer();
        if (player) {
            if (!document.fullscreenElement) {
                player.requestFullscreen().catch((err) => {
                    console.error("Fullscreen request failed:", err);
                });
            } else {
                document.exitFullscreen();
            }
        }
    };

    const handlePopover = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "playbackrate-popover" : undefined;

    const handleChangePlaybackRate = (rate) => {
        setPlaybackRate(rate);
    };

    const playerWrapperStyle = {
        width: "100%",
        position: "relative",
        display: "flex",
        paddingBottom: "56.25%",
        borderRadius: "10px",
        overflow: "hidden",
        height: 0
    };

    const videoStyle = {
        position: "relative",
        width: "100%",
    };

    const controlIconsStyle = {
        color: "#777",
        fontSize: 50,
        transform: "scale(0.9)",
    };

    const controlWrapperStyle = {
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        zIndex: 1,
    };

    const bottomIconsStyle = {
        color: "#999",
    };

    const volumeSliderStyle = {
        width: 100,
    };
    const [containerOpacity, setContainerOpacity] = React.useState(1);
    const [likesCount, setLikesCount] = React.useState(0);




    const [details, setDetails] = useState({});

    const [hasLiked, setHasLiked] = useState(false);

    const checkLikedStatus = async () => {
        try {
            const token = Cookies.get('token');
            const response = await axios.get(`http://35.221.224.70:8080/hasLiked/${internalFileId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setHasLiked(response.status === 200);
        } catch (error) {
            setHasLiked(false);
        }
    };





    const incrementViewCount = async () => {
        try {
            await axios.post(`${baseURL}/video/view/${internalFileId}`);
        } catch (error) {
            console.error('Error incrementing view count:', error);
        }
    };

    async function getInfo() {
        try {
            const response = await axios.get(`${baseURL}/video/details/${internalFileId}`);
            setDetails(response.data);
            await checkLikedStatus();
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getInfo();
        incrementViewCount();
        window.scrollTo(0, 0);

    }, [internalFileId]);

    const handleLikeClick = async () => {
        try {
            const token = Cookies.get('token');
            await axios.post(`http://35.221.224.70:8080/${internalFileId}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setHasLiked(true);
            setLikesCount(likesCount + 1)
            await getInfo();
        } catch (error) {
            console.error('Error liking the video:', error);


            setLikesCount(likesCount);
            setHasLiked(false);
        }
    };

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://35.221.224.70:8080/api/v1/video/search/a`);
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
        <React.Fragment>
            <Container >
                <div
                    style={playerWrapperStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}

                >
                    <div>
                        <ReactPlayer
                            ref={playerRef}
                            style={videoStyle}
                            url={baseURL + "/video/get/" + internalFileId}
                            muted={false}
                            playing={isPlaying}
                            volume={volume}
                            playbackRate={playbackRate}
                            onProgress={(e) => setCurrentTime(e.playedSeconds)}
                            onDuration={(e) => setDuration(e)}
                            width={"100%"}
                            height={"auto"}
                        />
                    </div>
                    {showControls && (
                        <div style={controlWrapperStyle}>

                            <Grid
                                container
                                direction="row"
                                alignItems="center"
                                justify="space-between"
                                style={{ padding: "10", paddingTop: "10px", paddingLeft: "10px" }}
                            >
                                <Grid item>
                                    <Typography variant="h6" style={{ color: "#fff" }}>
                                        {details['title']}
                                    </Typography>
                                </Grid>
                            </Grid>
                            {showMiddleControls && (
                                <Grid
                                    container
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <IconButton
                                        style={{
                                            ...controlIconsStyle,
                                            marginLeft: 16,
                                        }}
                                        aria-label="rewind"
                                        onClick={handleFastRewind}
                                    >
                                        <FastRewindIcon fontSize="inherit" />
                                    </IconButton>

                                    <IconButton
                                        style={controlIconsStyle}
                                        aria-label="play"
                                        onClick={handlePlayPause}
                                    >
                                        {isPlaying ? (
                                            <PauseIcon fontSize="inherit" />
                                        ) : (
                                            <PlayArrowIcon fontSize="inherit" />
                                        )}
                                    </IconButton>

                                    <IconButton
                                        style={{
                                            ...controlIconsStyle,
                                            marginRight: 16,
                                        }}
                                        aria-label="fast forward"
                                        onClick={handleFastForward}
                                    >
                                        <FastForwardIcon fontSize="inherit" />
                                    </IconButton>
                                </Grid>
                            )}
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                style={{ padding: 16 }}
                            >
                                <Grid item xs={12}>
                                    <Slider
                                        min={0}
                                        max={duration}
                                        value={currentTime}
                                        onChange={handleSliderChange}
                                        onChangeCommitted={handleSliderSeek}
                                        ValueLabelComponent={valuelabelcomponent}
                                        valueLabelFormat={(value) => formatTime(value)}
                                    />
                                </Grid>

                                <Grid item>
                                    <Grid container alignItems="center" direction="row">
                                        <IconButton
                                            style={bottomIconsStyle}
                                            onClick={handlePlayPause}
                                        >
                                            {isPlaying ? (
                                                <PauseIcon fontSize="large" />
                                            ) : (
                                                <PlayArrowIcon fontSize="large" />
                                            )}
                                        </IconButton>

                                        <IconButton style={bottomIconsStyle}>
                                            <VolumeUpIcon fontSize="large" />
                                        </IconButton>

                                        <Slider
                                            min={0}
                                            max={1}
                                            step={0.01}
                                            value={volume}
                                            onChange={handleVolumeChange}
                                            style={volumeSliderStyle}
                                        />
                                        <Button
                                            variant="text"
                                            style={{ color: "#fff", marginLeft: 16 }}
                                        >
                                            <Typography>
                                                {formatTime(currentTime)} / {formatTime(duration)}
                                            </Typography>
                                        </Button>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Button
                                        onClick={handlePopover}
                                        variant="text"
                                        style={bottomIconsStyle}
                                    >
                                        <Typography>{playbackRate}X</Typography>
                                    </Button>
                                    <Popover
                                        id={id}
                                        open={open}
                                        anchorEl={anchorEl}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "center",
                                        }}
                                        transformOrigin={{
                                            vertical: "bottom",
                                            horizontal: "center",
                                        }}
                                    >
                                        <Grid container direction="column-reverse">
                                            {[0.5, 1, 1.5, 2].map((rate) => (
                                                <Button
                                                    key={rate}
                                                    variant="text"
                                                    onClick={() => handleChangePlaybackRate(rate)}
                                                >
                                                    <Typography color="secondary">{rate}X</Typography>
                                                </Button>
                                            ))}
                                        </Grid>
                                    </Popover>
                                    <IconButton
                                        style={bottomIconsStyle}
                                        onClick={handleFullscreenToggle}
                                    >
                                        <FullscreenIcon fontSize="large" />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </div>
                    )}
                </div>
                <Paper
                    style={{
                        borderRadius: '15px',
                        padding: '16px',
                        backgroundColor: '#f2f2f2',
                    }}
                >
                    <Grid item xs={12}>
                        <strong>
                            <Typography variant="h5" style={{ marginBottom: '8px', paddingTop: '10px' }}> {details['title']}</Typography>
                        </strong>
                    </Grid>

                    <Grid item xs={12} style={{ marginBottom: '16px' }}>
                        <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
                            <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                                <Grid container alignItems="center" spacing={1}>
                                    <Grid item>
                                        <img
                                            src={channel}
                                            alt="Profile Icon"
                                            style={{ width: 30, height: 30, borderRadius: '50%' }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Link to={`/profile/${details['ownerDisplayName']}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <Typography variant="subtitle1" style={{ marginLeft: '8px', fontSize: '1rem', cursor: 'pointer' }}>
                                                {details['ownerDisplayName']}
                                            </Typography>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                                {/* Like icon */}
                                <IconButton
                                    color={hasLiked ? "error" : "default"}
                                    variant={hasLiked ? "contained" : "outlined"}
                                    disabled={hasLiked}
                                    sx={{
                                        "&.Mui-disabled": {
                                            color: "#f30909"
                                        }
                                    }}
                                    onClick={handleLikeClick}
                                    style={{ fontSize: '7px', marginRight: '8px' }}
                                >
                                    <ThumbUpIcon />
                                </IconButton>
                                {/* Likes container */}
                                <Paper
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '8px',
                                        borderRadius: '20px',  // Adjust the border radius for a rounded pill shape
                                        backgroundColor: '#e0e0e0',  // Set the background color to grey
                                        marginRight: '8px',  // Add some spacing between pills
                                        width: 'fit-content',
                                    }}
                                >
                                    <Typography variant="h6" style={{ marginLeft: '4px', fontSize: '1rem' }}>
                                        Likes: {details["likeCounter"]}
                                    </Typography>
                                </Paper>
                                <Paper
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '8px',
                                        borderRadius: '20px',  // Adjust the border radius for a rounded pill shape
                                        backgroundColor: '#e0e0e0',  // Set the background color to grey
                                        marginRight: '8px',  // Add some spacing between pills
                                    }}
                                >
                                    <Typography variant="subtitle1" style={{ marginLeft: '8px' }}>
                                        Views: {details['viewCounter']}
                                    </Typography>
                                </Paper>
                                {/* Uploaded on */}
                                <Paper
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '8px',
                                        borderRadius: '20px',  // Adjust the border radius for a rounded pill shape
                                        backgroundColor: '#e0e0e0',  // Set the background color to grey
                                    }}
                                >
                                    <Typography variant="subtitle1" style={{ marginLeft: '8px' }}>
                                        Uploaded On: {formatDate(details['uploadedOn'])}
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        {/* Layer 3: Description */}
                        <Typography
                            variant="body1"
                            style={{
                                fontSize: '1rem',
                                border: '1px solid #ddd',  // Adjust the color and width of the border
                                borderRadius: '10px',      // Adjust the border radius for rounded corners
                                padding: '10px',          // Adjust the padding inside the box
                                backgroundColor: '#e0e0e0',
                            }}
                        >
                            {details['desc']}
                        </Typography>
                    </Grid>
                </Paper>









            </Container>
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
                                videoId={video.internalFileId}
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
            </div>
        </React.Fragment>
    );
}

export default Test;