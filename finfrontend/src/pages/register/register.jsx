import "../login/login.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


export default function Register()  {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submitting");
        if (!validatePassword()) {
            return;
        }
        const response = await fetch("http://3.27.250.15:8000/fintech/register", {
            method: "POST",
            body: JSON.stringify({ username: username, password: password ,email : email , confirmation : confirmPassword}),
            mode: "cors",
        });
        const result = await response.json();
        console.log(result);
        if (result.status === "success") {
            console.log("proceed login");
            navigate('/dashboard')
        }
        else if(result.status === "user_already_exists"){
            alert("user already exists");
        }
    };
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);

    }

    const  handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const validatePassword = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            setConfirmPassword("");
            setPassword("");
            return false;
        }
        return true;
    }

    return (
        <div className="login-container">
            <div className="login-image">
            <div className="form-container">
                <div className={"sign-in-title"}>Sign up for <span className="hl">Lorem</span></div>
                <hr/>
                <form className="login-form">
                    <input type={"text"} className="input-text" name="username" placeholder="username" onChange={handleUsernameChange}/>
                    <input type={"text"} className="input-text" name="email" placeholder="email@example.com" onChange={handleEmailChange}/>
                    <input type={"password"} className="input-text" name="password" placeholder="password" onChange={handlePasswordChange}/>
                    <input type={"password"} className="input-text" name="confirmation" placeholder="Confirm Password" onChange={handleConfirmPasswordChange}/>
                    <input type={"submit"} value={"Sign Up"} className="input-submit" onClick={handleSubmit}/>
                </form>
                <div className={"sign-up-link"}>Already have an account ? <a href="/login">Sign In</a> Instead</div>
            </div>
            </div>
        </div>
    );
}