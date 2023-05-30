import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Assets/eiffeltower.jpeg';
import img2 from '../Assets/cw.jpg';
import img3 from '../Assets/dubai.jpg';
import img4 from '../Assets/about.jpeg';
import img5 from '../Assets/h1.jpg';
import img6 from '../Assets/taj-mahal.jpg';
import img7 from '../Assets/t3.webp';
// import img8 from '../Assets/t3.jpg';
// import img9 from '../Assets/greece.jpg';
// import img10 from '../Assets/greece.jpg';


function DarkVariantExample() {
  return (
    
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img5}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img6}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img7}
          alt="First slide"
        />
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={img8}
          alt="First slide"
        />
      </Carousel.Item> */}
    </Carousel>
  );
}

export default DarkVariantExample;