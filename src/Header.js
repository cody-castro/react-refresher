import React from 'react'
import "./header.css"
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from "@material-ui/icons/Language"
import {Avatar} from "@material-ui/core"

function Header() {
    return(
        <div className='header'>
            <img className='header__icon' src="airbnblogo.png" alt="logo"/>

            
            <div className='header__center'>
                <input type='text'/>
                <SearchIcon />
                <LanguageIcon />
                <Avatar />
            </div>

            <div className='header__right'>
                <p>Become a host</p>
            </div>

        </div>
    )
}

export default Header