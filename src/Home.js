import React from 'react'
import "./home.css"
import Banner from "./Banner.js"
import Card from "./Card.js"

function Home() {
    return(
        <div className='home'>
            <Banner/>

            <div className='home__section'>
                {/* 
                <Card/>
                <Card/>
                <Card/> 
                */}
            </div>
            <div className='home__section'>
                {/* 
                <Card/>
                <Card/>
                <Card/> 
                */}

            </div>

        </div>
    )
}

export default Home