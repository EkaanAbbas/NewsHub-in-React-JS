
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import LoadingBar from 'react-top-loading-bar'
import NewsItem from './Component/NewsItem';


export default class App extends Component {

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }





  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={2}
          />
          <Routes>
            <Route path='/Home' element={<News setProgress={this.setProgress} category="general" />} />
          </Routes>

          <Routes>
            <Route path='/Business' element={<News setProgress={this.setProgress} category="business" />} />
          </Routes>

          <Routes>
            <Route path='/Entertainment' element={<News setProgress={this.setProgress} category="entertainment" />} />
          </Routes>

          <Routes>
            <Route path='/General' element={<News setProgress={this.setProgress} category="general" />} />
          </Routes>

          <Routes>
            <Route path='/Health' element={<News setProgress={this.setProgress} category="health" />} />
          </Routes>

          <Routes>
            <Route path='/Science' element={<News setProgress={this.setProgress} category="science" />} />
          </Routes>

          <Routes>
            <Route path='/Sports' element={<News setProgress={this.setProgress} category="sports" />} />
          </Routes>

          <Routes>
            <Route path='/Technology' element={<News setProgress={this.setProgress} category="technology" />} />
          </Routes>

        </BrowserRouter>
      </React.Fragment>
    )
  }
}

