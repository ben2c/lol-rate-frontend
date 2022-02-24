import React, { Component } from 'react';
import './Champion.css';
import '../App.css';
import { Card, Image } from 'semantic-ui-react';
import { claimChampion, unclaimChampion } from '../actions/championOwnerships';
import { connect } from 'react-redux';


class ChampionCard extends Component {


  constructor(props) {
    //super calls the constructor of parent class Component
    super(props);

    //set initial state in constructor since it runs first
    this.state = { liked: false }

  }

  //alter state when like button is clicked using setState
  clickHandler = () => {
    this.setState(state => ({
      liked: !state.liked
    }));
  }



  render() {
    //Destructure to extract data from objects into their own variable- ex: champion instead this.props.champion)
    const { champion, numUsers, claimChampion, unclaimChampion, championsReducer } = this.props;

    let buttonsVisible =
      <div>
        {champion.claimed !== "true" ?
          <div className="meta-button" onClick={() => { claimChampion(champion, championsReducer.currentUser) }}>Meh<i className='red ban icon' /></div> :
          <div className="unmeta-button" onClick={() => { unclaimChampion(championsReducer.championOwnerships, champion, championsReducer.currentUser) }}><i className="green check icon" />OP</div>
        }   </div>


    return (

      <Card>
        <div key={champion.id} >

          <Card.Content>
            <Image className="ChampionImage" src={champion.url} alt={champion.name} />
            <Card.Header><strong>{champion.name}</strong></Card.Header>
            <Card.Description>{champion.lane}</Card.Description>
            
          </Card.Content>

          <Card.Content extra>
            <i className='grey users icon' /> {numUsers !== undefined ? champion.users.length : 0}
          </Card.Content>


          {championsReducer.currentUser.username ? buttonsVisible : ""}


        </div>
      </Card>

    )
  }
}



const mapStateToProps = state => {
  return {
    champions: state.champions,
    user: state.currentUser,
    championOwnerships: state.championOwnerships,
    championsReducer: state.championsReducer
  }
}

export default connect(mapStateToProps, { claimChampion, unclaimChampion })(ChampionCard);
