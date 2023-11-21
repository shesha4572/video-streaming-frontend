import React, { useState } from 'react';
import { Stack } from "@mui/material";
import './Uploader.css';
import axios from "axios";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import Cookies from 'js-cookie';

function Uploader() {
    const [video, setVideo] = useState(null);
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No file selected");
    const [videoName, setVideoName] = useState("");
    const [thumbnailUrl, setThumbnailUrl] = useState("");
    const [description, setDescription] = useState("");
    const [videoSize, setVideoSize] = useState(0);
    const BASE_URL = 'http://35.221.224.70:8080';
    const URI = BASE_URL + '/api/v1/upload/initFile';


    const uploadFileChunks = async () => {
        const token = Cookies.get('token');
        const form = new FormData();
        form.set("title", videoName);
        form.set("fileSize", videoSize);
        form.set("desc", description);
        form.set("thumbnailLink", thumbnailUrl);
            axios.post(URI, form, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type" : "application/json"
                },
            }).then(async (response) => {
                if (response.status === 200) {
                    console.log(response.data)
                    const chunkName = response.data
                    const chunkSize = 64 * 1000 * 1000;
                    const chunkPromises = [];
                    for (let i = 0; i < chunkName.length; i++) {
                        console.log(i)
                        const start = i * chunkSize;
                        const end = Math.min(video.size, start + chunkSize);
                        const chunk = video.slice(start, end);
                        const formData = new FormData();
                        formData.set("file", chunk);
                        chunkPromises.push(
                            axios.post(`${BASE_URL}/api/v1/upload/uploadChunk/${chunkName[i][0]}/${i}/${chunkName[i].slice(1).join(",")}`, formData, {
                                headers: {
                                    'Authorization': `Bearer ${token}`,
                                    'Content-Type': 'multipart/form-data',
                                },
                            })
                        );
                        try {
                            const responses = await Promise.all(chunkPromises);
                            console.log("File chunks uploaded successfully:", responses);
                        } catch (error) {
                            console.error("Error uploading file chunks:", error);
                        }
                    }
                }
            }
        )
    };

    return (
        <div id="app-body-uploader">
            <Stack style={{marginTop: '150px'}}>
                <form>
                    <input
                        id="uploader-form-3"
                        type="text"
                        placeholder="Enter Video Name"
                        value={videoName}
                        onChange={(e) => setVideoName(e.target.value)}
                    />
                    <input
                        id="uploader-form-4"
                        type="text"
                        placeholder="Enter Thumbnail URL"
                        value={thumbnailUrl}
                        onChange={(e) => setThumbnailUrl(e.target.value)}
                    />
                    <textarea
                        id="uploader-form-5"
                        placeholder="Enter Video Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </form>
                <form id="uploader-form" onClick={() => document.querySelector(".input-field-upload").click()}>
                    <input
                        type="file"
                        accept='video/*'
                        className='input-field-upload'
                        hidden
                        onChange={({ target: { files } }) => {
                            const selectedVideo = files[0];
                            if (selectedVideo) {
                                setFileName(selectedVideo.name);
                                setImage(URL.createObjectURL(selectedVideo))
                                setVideo(selectedVideo)
                                setVideoSize(selectedVideo.size);
                            }
                        }}
                    />
                    {image ? (
                        <img src={image} width={150} height={150} alt={fileName} />
                    ) : (
                        <>
                            <MdCloudUpload color='#1475cf' size={60} />
                            <p>Browse Files to Upload</p>
                        </>
                    )}
                </form>
                <section id='uploaded-row'>
                    <MdCloudUpload color='#1475cf' />
                    <span id='upload-content'>
                        {fileName}
                        <MdDelete
                            onClick={() => {
                                setFileName("No file selected");
                                setImage(null);
                                setVideo(null);
                            }}
                        />
                    </span>
                </section>
                <div id="upload-button">
                    {video && (
                        <button onClick={uploadFileChunks}>Upload Video</button>
                    )}
                </div>
            </Stack>
        </div>
    );
}

export default Uploader;