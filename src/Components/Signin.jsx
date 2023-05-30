import './Signin.css';
export default function Signin() {
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
    return (
        <>
            <div className="v1_2">
                <div className="v1_3"></div>
                <div><input type="text" className="v1_4"/></div>
                <span className="v1_5">User Name</span>
                <div className="v1_8"></div>
                <span className="v1_20">WELCOME BACK!</span>
                <span className="v4_2">Password</span>
                <div><input type="password" className="v4_3" id="v17_14"/></div>
                <div className="v4_4"></div>
                <div className="v4_88" onClick={handleChange}></div>
                <span className="v4_7">LOGIN</span>
                <span className="v4_8">Email</span>
                <div><input type="email" className="v4_9"/></div>
                <div className="v4_10"></div>
            </div>
        </>
    )
}