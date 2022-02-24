import React from 'react'
import { Divider } from 'semantic-ui-react'
import Yasuo from '../images/yasuo.png';

const Home = () => {
  return (
    <div className="Home">

      <img src={Yasuo} alt="League of Legends" width= '35%' height='35%'/>
    </div>
  )
}

export default Home;