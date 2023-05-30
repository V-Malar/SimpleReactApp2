import Carousel from 'react-bootstrap/Carousel';
import './Hero.css';
import review1 from '../Assets/review1.png'
import review2 from '../Assets/review2.png'
import review3 from '../Assets/review3.png'
import review4 from '../Assets/review4.png'
import review5 from '../Assets/review5.png'
import review6 from '../Assets/review6.jpg'
import review7 from '../Assets/review7.jpg'
import review8 from '../Assets/review8.jpg'
import review9 from '../Assets/review9.jpg'

import Star from './Star';

export default function Reviews() {
    
    return (
        <div className='gridgot'>
    <Carousel fade className='review'>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={review1}
          alt="William"
        />
        <p>William</p>
        <Star/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={review2}
          alt="James"
        />
        <p>James</p>
        <Star/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={review3}
          alt="John"
        />
        <p>John</p>
        <Star/>
      </Carousel.Item>
    </Carousel>
    <Carousel fade className='review'>
    <Carousel.Item>
      <img
        className="d-block w-100 h-100"
        src={review4}
        alt="Mario"/>
        <p>Mario</p>
      <Star/>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 h-100"
        src={review5}
        alt="Lily"
      />
      <p>Lily</p>
      <Star/>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 h-100"
        src={review6}
        alt="Sweety"
      />
      <p>Sweety</p>
      <Star/>
    </Carousel.Item>
  </Carousel>
  <Carousel fade className='review'>
    <Carousel.Item>
      <img
        className="d-block w-100 h-100"
        src={review7}
        alt="Jade"
      />
      <p>Jade</p>
      <Star/>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 h-100"
        src={review8}
        alt="Yuno"
      />
      <p>Yuno</p>
      <Star/>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 h-100"
        src={review9}
        alt="Renu"
      />
      <p>Renu</p>
      <Star/>
    </Carousel.Item>
  </Carousel>
  </div>
    )
}
