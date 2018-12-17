import React, { Component } from 'react'
import Slider from "react-slick"
import photo1 from '../image/1.jpg'
import photo2 from '../image/2.jpg'
import photo3 from '../image/3.jpg'
import photo4 from '../image/4.jpg'
import photo5 from '../image/5.jpg'

const styles = {
  container: {
    margin: '0 auto',
    padding: '40px',
    width: '50%',
    color: '#333',
    background: '#808080',
  },
  bg: {
    background: '#867979',
  }
}

class Carousel extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
      return (
        <div style={styles.bg}>
        <div style={styles.container}>
          <Slider {...settings} width="500">
            <div>
              <img src={photo1} />
            </div>
            <div>
              <img src={photo2} />
            </div>
            <div>
              <img src={photo3} />
            </div>
            <div>
              <img src={photo4} />
            </div>
            <div>
              <img src={photo5} />
            </div>
          </Slider>
        </div>
        </div>
      );
    }
  }
  
  export default Carousel;