import React from 'react'
import "./card.css"
import faker from '@faker-js/faker'

function Card({src, title, description, price}) {


    return (
        <div className='card'>
            <img src={src} alt="card showing a thing" />
            <div className='card__info'>
                <h2>{title}</h2>
                <h4> {description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Card