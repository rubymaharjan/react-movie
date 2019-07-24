import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import NavigationIcon from '@material-ui/icons/Navigation';
import Social from './social';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),

    },
    textField: {
        flexBasis: 200,
        width: 250,
        marginLeft: 100,
    },
    formFlex: {
        display: "flex",
        flexDirection: "column",

    },
    submitBtn: {
        backgroundColor: "rgb(54, 143, 143)",
        color: "white",
        marginLeft: 100
    },
    field: {
    },
    forgotPwd: {
        marginLeft: 230,
    }
}));

const Failed = () => {
    return (
        <div className='login-warning'>
            Login Failed. Please try again.
		</div>
    )
}

class Signup extends Component {
    // initialState = {

    //     username: '',
    //     email: '',
    //     password: '',
    //     status: '',
    //     error: ''
    // }
    state = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        status: '',
        usernameError: '',
        emailError: '',
        passwordError: '',
        confirmError: '',
        error: ''
    }

    validateEmail = ({ email }) => {
        const emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return emailReg.test(this.state.email);
    }

    validatePass = ({ password }) => {
        const pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        return pass.test(this.state.password)
    }
    validateUserName = ({ username }) => {
        const UserName = /^([^0-9]*)$/
        return UserName.test(this.state.username)
    }

    // validity = ({ username, email, password, confirm_password }) => {
    //     return (
    //         username !== "" &&
    //         email !== "" &&
    //         password !== "" &&
    //         confirm_password !== "" &&
    //         this.validateUserName(this.state.username) &&
    //         this.validateEmail(this.state.email) &&
    //         this.validatePass(this.state.password) &&
    //         this.state.password === this.state.confirm_password
    //     );

    // };

    validate = () => {
        let usernameError = "";
        let emailError = "";
        let passwordError = "";
        let confirmError = "";
        if (!this.state.username) {
            usernameError = "Username cannot be blank"
        }
        if (!this.state.email.includes("@")) {
            emailError = "Invalid Email"
        }
        if (this.state.password.length < 8) {
            passwordError = "Enter valid password"
        }
        if(this.state.password != this.state.confirm){
            confirmError="Password didnot match"
        }
        if (usernameError || emailError || passwordError|| confirmError) {
            this.setState({ usernameError, emailError, passwordError, confirmError });
            return false;
        }
        return true;

    }
    handleSubmit = async e => {
        e.preventDefault()
        axios.post({
            "url": "https://api.themoviedb.org/3/authentication/token/new?api_key=004fe1ee41218ae53e75b9b4b7c47018"
        }).then(response=>
            console.log('response'+ response)
            )
            .catch(err=>console.log(err))
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state)
        }
        // console.log(JSON.stringify(this.state));
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }


    render() {
        // const classes = useStyles();

        return (
            <>
                {/* {this.state.isValid && <Redirect push to='/rated' />} */}
                {/* {this.state.status === 200 && <Redirect push to='/page' />}
                {this.state.status === 409 && <Failed />} */}
                <div className="login-container">
                    <div className="login-flex">
                        <div className="left-flex left-log">
                            <h2>WELCOME</h2>
                            <p>To keep connected with us, please login with your personal info.</p>
                            <a href="/login"><input type="submit" className="signup-btn" value="Login" /> </a>
                            <Social />

                        </div>
                        <div className="right-flex right-log" >
                            <h2>Signup</h2>
                            <p>Enter your details and start your movie journey with us.</p>

                            <form onSubmit={this.handleSubmit} method="post">
                                <div className="inputField">
                                    <TextField
                                        // id="standard-search"
                                        type="text"
                                        name="username"
                                        label="UserName"
                                        onChange={this.handleInput}
                                    />

                                    <div className="helper">
                                        {this.state.usernameError}
                                    </div>
                                </div>
                                <div className="inputField">
                                    <TextField
                                        // id="standard-search"
                                        type="Email"
                                        name="email"
                                        label="Email"
                                        onChange={this.handleInput}
                                    />

                                    <div className="helper">
                                        {this.state.emailError}
                                    </div>
                                </div>
                                <div className="inputField">
                                    <TextField
                                        // id="standard-search"
                                        type="password"
                                        name="password"
                                        label="Password"
                                        onChange={this.handleInput}
                                    />

                                    <div className="helper">
                                        {this.state.passwordError}
                                    </div>
                                </div>
                                <div className="inputField">
                                    <TextField
                                        // id="standard-search"
                                        type="password"
                                        name="confirm"
                                        label="Confirm Password"
                                        onChange={this.handleInput}
                                    />

                                    <div className="helper">
                                        {this.state.confirmError}
                                    </div>

                                </div>
                                <div className="inputField">
                                    <Fab
                                        variant="extended"
                                        size="medium"
                                        aria-label="Add"
                                        type="submit"
                                        className="submitBtn"
                                    >
                                        <NavigationIcon />
                                        Signup
                                        </Fab>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>

            </>
        )
    }
}
export default Signup