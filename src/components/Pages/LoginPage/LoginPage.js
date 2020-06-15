import React from 'react';
import "./LoginPage.scss";

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.login = React.createRef();
        this.password = React.createRef();
    }
    loginFunc = () =>{
        let loginValue = this.login.current.value;
        let passwordValue = this.password.current.value;
        console.log(loginValue+" "+passwordValue);  //walidacja
        
    }

    render() {
        return ( 
            <div className="log">
                <p className="smallCase">Login</p>
                <input className="log" type="text" ref={this.login}/>
                <p className="smallCase">Hasło:</p>
                <input className="log" type="password" ref={this.password}/>
                <div className="button"><input type="button" className="button" value="Zaloguj" onClick={this.loginFunc}/></div>
            </div>
        );
    }
}

export default LoginPage;