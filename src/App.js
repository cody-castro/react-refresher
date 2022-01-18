import React from 'react'
import './App.css';
import Home from './Home.js'
import Header from './Header.js'
import Footer from './Footer.js'
import SearchPage from './SearchPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    // BEM
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="search" element={<SearchPage/>} />
          <Route path="/" element={<Home/>}/>
        </Routes>
        
        <Footer/>

      </Router>

    </div>
  );
}

export default App;


