import React from 'react'
import "./home.css"
import Banner from "./Banner.js"

function Home() {
    return(
        <div className='home'>
            {/* <h1> Home Component </h1> */}
            <Banner/>
        </div>
    )
}

export default Home