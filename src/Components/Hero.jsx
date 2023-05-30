import Layout from "./Layout";
import './Hero.css';


export default function Hero(props)
{
    return (
        <>
        <Layout/>
        <img id='imgA' src={props.src} alt="Home"/>
        </>
    )
}