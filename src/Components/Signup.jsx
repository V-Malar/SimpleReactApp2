import './Hero.css';
import './Signup.css';

export default function Signup() {
    function handleChange()
    {
        let sp = document.querySelector('#v17_14');
        if (sp.type === 'password')
        {
            sp.type = "text";
        }
        else
        {
            sp.type = "password";
        }
    }
    function handleChangeC()
    {
        let sp = document.querySelector('#v17_15');
        if (sp.type === 'password')
        {
            sp.type = "text";
        }
        else
        {
            sp.type = "password";
        }
    }
    return (
        <>
            <div className="v22_2">
                <div className="v17_7"></div>
                <div className="v17_8"></div>
                <span className="v17_9">Password</span>
                <span className="v17_10">Confirm Password</span>
                <span className="v17_11">Email</span>
                <span className="v17_12">CREATE ACCOUNT</span>
                <div><input type="email" className="v17_13"/></div>
                <div><input type="password" className="v17_14" id="v17_14"/></div>
                <div><input type="password" className="v17_15" id="v17_15"/></div>
                <div className="v17__v16"><div className="v17_16"></div>
                <span className="v17_17">SIGN UP</span></div> 
                <div><input type="text" className="v17_18"/></div>
                <div><input type="text" className="v17_19"/></div>
                <span className="v17_20">First Name
                </span><span className="v17_21">Last Name
                </span><div className="v17_22"></div>
                <div className="v17_23"></div>
                <div className="v17_24"></div>
                <div className="v17_25"></div>
                <div className="v17_26"></div>
                <div className="v4_5" onClick={handleChange}></div>
                <div className="v4_6" onClick={handleChangeC}></div>
            </div>
        </>
    )
}