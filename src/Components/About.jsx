
import about from '../Assets/about1.jpeg';
import Layout from "./Layout";
import Hero from './Hero';


export default function About()
{
    return (
        <>
        <Layout/>
        <Hero src={about}/>
        <h1 className='wish'>WE OFFER</h1>
        <h2 className='wish1'>We specialize in arranging travel & tourism packages to the Indian Sub-Continent, creating innovative itineraries for independent travelers and their families. We will provide you with an opportunity to explore our culture, visit beautiful sites, have fun and make a hassle-free tour program anywhere in India. We are a reputed tour operator in the industry backed by years of experience, which helps us offer the best packages to visitors from across the world, who wish to learn & experience more about this fabulous country & its rich heritage.
        <br/><br/><br/><br/>
        <span>
        <i class="fa-brands fa-facebook"></i> |&nbsp;
        <i class="fa-brands fa-twitter"></i> |&nbsp;
        <i class="fa-brands fa-square-instagram"></i> |&nbsp;
        <i class="fa-brands fa-telegram"></i> |&nbsp;
        <i class="fa-brands fa-square-snapchat"></i>
        <span>© Copyright 2023 FARHAN FARAN, Tamilnadu, India.</span>
        </span>
        </h2>
        </>
    )
}