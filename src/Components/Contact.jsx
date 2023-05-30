import Hero from "./Hero";
import Layout from "./Layout";
import contact from '../Assets/contact.jpg';
import Contactform from "./Contactform";
// import './Contact.css';

export default function Contact()
{
//     const style =
//   {
//     position: "absolute",
//     top: "1.2in",
//     left: "4in",
//     colGap: "5in",
//     rowGap: "0.1in",
//     display: "grid",
//     gridTemplateColumns: "45% 45%",
//     gridGap: "0.1in",
//     color: "white",
//     fontSize: "1.5rem",
//     width: "50vw",
//     height: "50vh"
//   }
    return (
        <>
        <Layout/>
        <Hero src={contact}/>
        <Contactform/>
        </>
    )
}