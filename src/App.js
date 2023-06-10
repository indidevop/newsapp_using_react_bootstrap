
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


const App =()=> {
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)


 
   //cannot modify state in render method, it runs between mounting and updating of component
    return (
      <div>
        <Router>
        <LoadingBar
        height={2}
        color='#f11946'
        progress={progress}
      />
          <Navbar />

          <Routes>
            <Route strict path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" country="in" pageSize={21} category="general"/>}></Route>
            <Route strict path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key="general" country="in" pageSize={21} category="general"/>}></Route>
            <Route strict path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" country="in" pageSize={21} category="business" />}></Route>
            <Route strict path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science"country="in" pageSize={21} category="science" />}></Route>
            <Route strict path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" country="in" pageSize={21} category="entertainment" />}></Route>
            <Route strict path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" country="in" pageSize={21} category="health" />}></Route>
            <Route strict path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" country="in" pageSize={21} category="sports" />}></Route>
            <Route strict path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" country="in" pageSize={21} category="technology" />}></Route>

          </Routes>
        </Router>
      </div>
    )
  
}

export default App

