import "../login/login.css";


export default function Register()  {
    return (
        <div className="login-container">
            <div className="login-image">
            <div className="form-container">
                <div className={"sign-in-title"}>Sign up for <span className="hl">Lorem</span></div>
                <hr/>
                <form className="login-form" method="POST" action="{%url 'login'%}">
                    <input type={"text"} className="input-text" name="username" placeholder="username"/>
                    <input type={"text"} className="input-text" name="email" placeholder="email@example.com"/>
                    <input type={"password"} className="input-text" name="password" placeholder="password"/>
                    <input type={"submit"} value={"Sign Up"} className="input-submit"/>
                </form>
                <div className={"sign-up-link"}>Already have an account ? <a href="/login">Sign In</a> Instead</div>
            </div>
            </div>
        </div>
    );
}