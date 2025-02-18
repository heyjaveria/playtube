import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';
//  turning app in to instant return by replacing {} with ()
const App = () => (
// wrapping our entire app in browserrouter 
  <BrowserRouter>
  {/* box is just like a div  */}
  <Box sx={{ backgroundColor: '#000' }}>

  <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
  </Box>
  </BrowserRouter>

)

export default App

