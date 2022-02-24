import React from 'react';
import { Container, Divider } from 'semantic-ui-react'
import './Champion.css';

const About = () => {

  return (
    <div className='about'>
      <Divider />
      <Container>
        <h3>About Us</h3>
        <h4>This web application is designed to allow the League of Legends community base to vote and tabluate the trending champions in the game. 
        It was built with a Javascript frontend utilizing the React-Redux UI library with a Ruby on Rails API backend.
        </h4>
      </Container>
    </div>
    
  )

}


export default About;