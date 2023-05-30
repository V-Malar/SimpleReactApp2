import './Hero.css';
export default function Star()
{
    return (
        <>
        <div className='rating'>
            <input type='radio' name='star' id='star1'/><label htmlFor='star1'/>
            <input type='radio' name='star' id='star2'/><label htmlFor='star2'/>
            <input type='radio' name='star' id='star3'/><label htmlFor='star3'/>
            <input type='radio' name='star' id='star4'/><label htmlFor='star4'/>
            <input type='radio' name='star' id='star5'/><label htmlFor='star5'/>
        </div>
        </>
    )
}