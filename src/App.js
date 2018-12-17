import React, { Component } from 'react'
import './App.css'
import Info from './components/Info'
import Carousel from './components/Carousel'
import Contacts from './components/Contacts'

const styles = {
  container: {
    margin: '10px 20px'
  },
}

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Info />
        <Carousel />
        <Contacts />
      </div>
    );
  }
}

export default App;
