import React from 'react';
import {Field,reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import {SetSignInAC} from '../../reducers/AddClient.js';
import './style.css';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        this.props.isLogin 
        ? this.props.SetSignInAC(false)
        : this.props.SetSignInAC(true);
    }

    render(){        
        return(
            <main className="main-wrapper">
                {!this.props.isLogin 
                ?   <form onSubmit={this.props.handleSubmit(()=>{this.handleSubmit()})}>
                        <Field type="text" component={"input"} name="LoginField" 
                            id="login-field" placeholder="Login..."/> 
                        <Field type="password" component={"input"} name="PasswordField" 
                            id="password-field" placeholder="Password"/>
                        <div className="button-wrapper">
                            <button className="signin login" type="submit">Войти!</button>
                            <button className="signin forgot">Забыли пароль</button>
                        </div>
                    </form>
                :<h2>Вы уже вошли в систему!</h2>}
            </main>
        )
    }
}

let SignInComponent = reduxForm({form: "SignInForm"})(SignIn);
SignInComponent = connect(state=>({
    isLogin: state.AddClientReducer.isLogin,
    infoAboutUser: state.form.SignInForm
}),{SetSignInAC})(SignInComponent);


export default SignInComponent;



