import bag1 from '../Assets/bag1.jpg';
import bag2 from '../Assets/bag2.jpg';
import bag3 from '../Assets/bag3.jpg';
import bag4 from '../Assets/bag4.jpg';
import light1 from '../Assets/light1.jpg';
import light2 from '../Assets/light2.jpg';
import light3 from '../Assets/light3.jpg';
import light4 from '../Assets/light4.jpg';
import item1 from '../Assets/t1.jpg';
import item2 from '../Assets/item2.jpg';
import item3 from '../Assets/item3.jpg';
import item4 from '../Assets/item4.jpg';
import shoe1 from '../Assets/shoe1.webp';
import shoe2 from '../Assets/shoe2.webp';
import shoe3 from '../Assets/shoe3.webp';
import shoe4 from '../Assets/shoe4.webp';


import './Hero.css';

export default function Productlist()
{
    const bags = [{ name: 'ADISA', def: '32L Large Laptop Backpack Office Bag College Travel Back Pack with rain Cover (Navy)', price: `₹599 M.R.P: ₹1,799 (67% off)Get it by Tomorrow, 14 May FREE Delivery by Amazon`, src:bag1, class:'bags'},
  {
    name: `Gear`, def: `Alphamount 45L Water Resistant Trekking Travel Rucksack for Men,Women - Black Yellow
                      `, price: `₹879 M.R.P: ₹3,599 (76% off)
                      FREE Delivery by Amazon`, src:bag2, class:'bags'},
  {
    name: `TRAWOC`, def: `75 Ltr Travel Backpack Camping Hiking Trekking Bag, Navy Blue`, price: `₹2,226 M.R.P: ₹4,999 (55% off)
                      FREE Delivery by Amazon`, src:bag3, class:'bags'},
  {
    name: `Impulse`, def: `Office Bag College Travel Back Pack with rain Cover (Navy)
                      `, price: `₹599 M.R.P: ₹1,799 (67% off)
                      Get it by Tomorrow, 14 May
                     FREE Delivery by Amazon`,  src:bag4, class:'bags'}]
    const lights = [
        {brand: `SPRIT`, def: `Seaspirit Led Head Lamp Flash Light Torch With Adjustable Rechargeable Battery`, price: ` ₹895.00 INR*`, src:light1},
        {brand: `LEDE`, def: `Adjustable Headlamp Lightweight Rechargeable Resistant Waterproof`, price: `₹1,129.00`, src:light2},
        {brand: `CINEFX`, def: `50W Laser Hi-Power Waterproof LED Rechargeable Head Lamp`, price: ``, src:light3},
        {brand: `NITECORE`, def: `NITECORE HC35 2700 Lumen USB Rechargeable 21700 L-Shape Detachable`, price: `₹26,488.00 INR*`, src:light4}
    ]
    const items = [
        {brand: `RIANZ`, def: `RIANZ Mini Travel Sew Kit Beginner Mini Sewing Box`, price:`₹224`, src:item1},
        {brand: `MINISO`, def: `Travel Bottle Kit Set of 4, Portable Plastic Multipurpose Cosmetic Toiletries Travel`, price:`₹200`, src:item2},
        {brand: `Kira`, def: `Travel Bottles Kit, Portable Refillable Toiletry Containers`, price:`₹249`, src:item3},
        {brand: `SNDIA`, def: `Set of 4 Multipurpose Transparent Travel Pouch`, price:`₹449`, src:item4}
    ]
    const shoes=[
        {brand:`LIBERTY`, def:`Warrior Mountain Trekker Comfortable, For Men - Black`, price:`₹1,899`, src:shoe1},
        {brand:`Wildcraft`, def:`Volga Hiking & Trekking Shoes For Men`, price:`₹1,599`, src:shoe2},
        {brand:`Wildcraft`, def:`Clivton Hiking & Trekking`, price:`₹1,729`, src:shoe3},
        {brand:`Wildcraft`, def:`Volga NX Hiking & Trekking`, price:`₹1,799`, src:shoe4}
    ]
    return (
        <>
        <ul className='bags'>
            {
                bags.map((values, index) =>
                {
                    return (
                        <li key={index} className="pro">
                            <img src={values.src}alt="Here you go..."/>
                            <h5><b>{values.name}</b></h5><hr/>
                            <p><i>{values.def}</i></p>
                            <h6><b>{values.price}</b></h6>
                        </li>
                    )
                }
            )}
            {
                lights.map((values, index) =>
                {
                    return (
                    <li key={index} className="pro">
                        <img src={values.src} alt="Here you go"/>
                        <h5><b>{values.brand}</b></h5><hr/>
                            <p><i>{values.def}</i></p>
                            <h6><b>{values.price}</b></h6>
                    </li>
                )}
            )}
            {
                items.map((values, index) =>
                {
                    return (
                    <li key={index} className="pro">
                        <img src={values.src} alt="Here you go"/>
                        <h5><b>{values.brand}</b></h5><hr/>
                            <p><i>{values.def}</i></p>
                            <h6><b>{values.price}</b></h6>
                    </li>
                )}
            )}
            {
                shoes.map((values, index) =>
                {
                    return (
                    <li key={index} className="pro">
                        <img src={values.src} alt="Here you go"/>
                        <h5><b>{values.brand}</b></h5><hr/>
                            <p><i>{values.def}</i></p>
                            <h6><b>{values.price}</b></h6>
                    </li>
                )}
            )}
        </ul>
        </>
    )
}