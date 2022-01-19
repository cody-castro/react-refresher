import React from 'react'
import './searchPage.css'
import {Button} from "@material-ui/core"
import SearchResult from './SearchResult.js'


function SearchPage(){

    return(
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 Stays - 26 August to 30 August - 2 Guests</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Type of Place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and Beds</Button>
                <Button variant="outlined">More filters</Button>

            </div>
            <SearchResult />

        </div>
    )

}

export default SearchPage