import Layout from "./Layout";
import DarkVariantExample from "./DarkVariantExample";

export default function Home()
{
//     function scrollToBottom()
// {
//     window.scroll(0 , 500);
//     // if (window.scroll(0 , 500))
//     // {
//     //     hide.style.display = "none";
//     // }
    
    
// }

    return (
        <>
        <Layout/>
        <div className="bird">
        <h1><b>"FLY OUT YOUR CAGE TO FIND YOUR PARADISE"</b></h1>
        <h4><b>- MY INNER VOICE</b></h4>
        </div>
        <DarkVariantExample/>
        </>
    )
}