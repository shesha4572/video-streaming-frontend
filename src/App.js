import './App.css';
import React from 'react';
import Header from "./Header";
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/'>
            <div className="app_page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
          <Route path='/search/:searchTerm'>
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
