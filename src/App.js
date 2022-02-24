import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import NavBar from './components/NavBar'
import Champions from './containers/Champions';
import ChampionForm from './components/ChampionForm';
import Like from './containers/Like';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Login from "./components/Login"
import Logout from "./components/Logout"
import { getAllChampions } from './actions/champions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Divider } from 'semantic-ui-react'
import history from './history';

class App extends React.Component {

  componentDidMount() {
    this.props.getAllChampions();
  }

  render() {

    let loggedIn = this.props.championsReducer.currentUser.username


    return (
      <div>

        <Router history={history}>
          <div className="App">
            <NavBar />

            <h3>League of Legends Champion Rate</h3>

            {loggedIn ? <Logout /> : <div> <Login /> <Signup /> </div>}
            {loggedIn ? <ChampionForm /> : ""}

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/champions" component={Champions} />
              <Route path="/Like" component={Like} />
              <Route path="/about" component={About} />
            </Switch>

            <Divider />

            <Footer />


          </div>
        </Router>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    championsReducer: state.championsReducer
  }
}




export default connect(mapStateToProps, { getAllChampions })(App);