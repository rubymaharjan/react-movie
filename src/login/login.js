import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'



class Login extends Component {
    state = {
        name: '',
        password: '',
        status: '',
        on: false

    }
    handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=<<api_key>>`, this.state)
            if (res.status === 200) {
                this.setState({ status: res.status })
            }
        } catch (error) {
            console.log(error)
        }
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    toggle = () => {
        this.setState(
            {
                on: !this.state.on
            }
        )
    }
    render() {
        return (
            <>
                {this.state.on && <Redirect push to='/signup' />}

                {this.state.status === 200 && <Redirect push to='/page' />}
                {/* {this.state.status === 409 && <Failed />} */}
                <div className="login-container">
                    <div className="login-flex">
                        <div className="left-flex left-log">
                            <h2>WELCOME</h2>
                            <p>To keep connected with us, please login with your personal info.</p>
                            <input type="submit" className="signup-btn" value="Signup" onClick={this.toggle}/>

                        </div>
                        <div className="right-flex right-log" >
                            <h2>Login</h2>
                            <p>Enter your details and start your movie journey with us.</p>

                            <form onSubmit={this.handleSubmit} method="post">
                                <input type="text" onChange={this.handleInput} placeholder="UserName" /><br />
                                <input type="password" onChange={this.handleInput} name="password" placeholder="Password" /><br />
                                <input type="submit" className="login-btn" value="Login" />

                            </form>
                            <h4>OR</h4>
                            {/* <p>Signin using</p> */}

                        </div>

                    </div>
                </div>
            </>
        )
    }
}
export default Login