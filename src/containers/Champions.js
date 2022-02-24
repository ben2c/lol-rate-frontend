import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChampionCard from '../components/ChampionCard';
import { Card } from 'semantic-ui-react';
import Stats from '../components/Stats';
import { Divider } from 'semantic-ui-react'
import './Interface.css';


class Champions extends Component {

  state = { newSearch: "" }

  handleInputChange = e => {
    this.setState({ newSearch: e.target.value })
  }

  render() {
    //Destructure to extract data from objects into their own variable- ex: champion instead this.props.champion)
    const { championsReducer } = this.props;

    //copy champions so sort does not mutate
    let topChampions = [...championsReducer.champions].sort((a, b) => (a.users.length > b.users.length) ? -1 : 1)
    let championsMatch = championsReducer.champions.filter((champion) => champion.name.toLowerCase().includes(this.state.newSearch.toLowerCase()))

    return (
      <div className="Champions">
        <br/>
        <input placeholder="Search" value={this.state.newSearch} name="championName" type="text" onChange={this.handleInputChange} />
        <Divider />
        <Stats numChampions={championsReducer.champions.length} topThree={topChampions.slice(0, 3)} />
        <Divider />

        <Card.Group itemsPerRow={6}>
          {championsMatch.map((champion, id) => <ChampionCard claimed={champion.claimed} numUsers={champion.users.length} key={id} champion={champion} />)}
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

export default connect(mapStateToProps)(Champions);
