import React from 'react'
import BannerImage from '../assets/1beef.jpg'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${BannerImage})`}}></div>
        <div className='aboutBottom'>
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi id dolores fuga, quis, qui asperiores maxime error eveniet fugit exercitationem, soluta doloribus veritatis sapiente. Vel deserunt illum nihil sunt nesciunt voluptates ratione quaerat atque nam!</p>
        </div>
    </div>
  )
}

export default About