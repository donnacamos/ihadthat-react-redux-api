import React from 'react';
import './App.css';
 

import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import  NavBar  from './components/NavBar'
import MainContainer from './containers/MainContainer';
import Toys from './containers/Toys';
import ToyForm from './components/ToyForm';
import MyStuff from './containers/MyStuff';

class App extends React.Component {

 
  componentDidMount() {
    this.props.getCurrentUser()

  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <MainContainer />
        <ToyForm />
        <Toys />
        <MyStuff />

      </div>
        
    );
  }
  
}

 

export default connect(null, { getCurrentUser })(App);
