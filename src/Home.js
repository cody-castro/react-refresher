import React from 'react'
import "./home.css"
import Banner from "./Banner.js"
import Card from "./Card.js"
import faker from '@faker-js/faker'

function Home() {

    function price(){
        return (
            faker.finance.price()
        )
    }

    return(
        <div className='home'>
            <Banner/>

            <div className='home__section'>
                
                <Card
                    src={faker.image.imageUrl()}
                    title="Online Experiences"
                    description={faker.hacker.phrase()}
                />
                  <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Unique stays"
                    description={faker.company.bs()}
                 />  
                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Entire homes"
                    description={faker.company.bs()}
                /> 
               
            </div>
            <div className='home__section'>
                
                <Card
                    src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                    title="3 Bedroom Flat in Bournemouth"
                    description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                    price={faker.finance.amount()}
                />
                <Card
                    src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with this stunning penthouse"
                    price={faker.finance.amount()}
                />
                <Card
                    src="https://media.nomadicmatt.com/2018/apartment.jpg"
                    title="1 Bedroom apartment"
                    description="Superhost with great amenities and a fabolous shopping complex nearby"
                    price={faker.finance.amount()}
                /> 
               

            </div>

        </div>
    )
}

export default Home