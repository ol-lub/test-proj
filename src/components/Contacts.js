import React, { Component } from 'react'
import vk from '../image/vk.png'
import inst from '../image/inst.png'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
}

class Contacts extends Component {
    render() {
      return (
        <div style={styles.container}>
          <a href="https://vk.com/ole4ca">
            <img src={vk} />
          </a>
          <a href="https://www.instagram.com/ol_lub/">
            <img src={inst} />
          </a>
        </div>
      );
    }
  }
  
  export default Contacts;