import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Button } from 'semantic-ui-react';
import '../App.css';
import Icon from '../images/icon.png';
import './NavBar.css';

const NavBar = () => {

  return (
    <div className="nav">
      <Menu>

        <a href='/'><img id='icon' src={Icon} height='50' width='51' center top/></a>
        
        <ul>
          <li><Link to='/champions' className='champ'>View All Champions </Link></li>

          <li><Link to='/Like' className='champ'>View My Liked Champions </Link></li>

          <li><Link to='/about' className='champ'>About Us </Link></li>
        </ul>

      </Menu>
    </div>
  )
}

export default NavBar