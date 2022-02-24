import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChampionCard from '../components/ChampionCard';
import { Card, Divider } from 'semantic-ui-react';
import './Interface.css';

class Like extends Component {

  render() {
    //Destructure to extract data from objects into their own variable- ex: champion instead this.props.champion)
    const { championsReducer } = this.props;

    return (

      <div className="Like">
        <Divider hidden />

        {championsReducer.currentUser.username ? <h3>{championsReducer.currentUser.username}'s Champions</h3> : <strong>Log in or sign up</strong>}

        <Divider hidden />

        <Card.Group itemsPerRow={6}>
          {championsReducer.userChampions.map((champion, id) => <ChampionCard numUsers={champion.users.length} claimed={champion.claimed} key={id} champion={champion} />)}

        </Card.Group>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    championsReducer: state.championsReducer
  })
}

export default connect(mapStateToProps)(Like);