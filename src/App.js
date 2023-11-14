// App.js
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import RecommendedVideos from './components/Video/RecommendedVideos';
import Welcome from './components/Welcome/Welcome';
import Player from './components/VideoPlayer/Player';
import SearchPage from './components/Search/SearchPage';
import Login from './components/Auth/Login';
import Uploader from './components/Uploader/Uploader';
import PlayCard from './components/PlayCard/PlayCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <div>
        <ToastContainer />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <div>
                <Header onMenuClick={toggleSidebar} />
                <div className="app_page">
                  {isSidebarOpen && <Sidebar />}
                  <RecommendedVideos />
                </div>
              </div>
            }
          />
          <Route
            path="/play"
            element={
              <div>
                <Header onMenuClick={toggleSidebar} />
                <div className="app_page">
                  {isSidebarOpen && <Sidebar />}
                  <Player />
                </div>
              </div>
            }
          />
          <Route
            path="/search/:searchTerm"
            element={
              <div>
                <Header onMenuClick={toggleSidebar} />
                <div className="app_page">
                  {isSidebarOpen && <Sidebar />}
                  <SearchPage />
                </div>
              </div>
            }
          />
          <Route
            path="/upload"
            element={
              <div>
                <Header onMenuClick={toggleSidebar} />
                <div className="app_page">
                  {isSidebarOpen && <Sidebar />}
                  <div className="uploader_body">
                    <Uploader />
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/playcard"
            element={
              <div>
                <Header onMenuClick={toggleSidebar} />
                <div className="app_page">
                  {isSidebarOpen && <Sidebar />}
                  <PlayCard />
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
