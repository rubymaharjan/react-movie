import React from 'react';
import clsx from 'clsx';
import { Redirect } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Forgot from './forgot'

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
    forgotPwd: {
        marginLeft: 230,
        fontSize:13,
        marginBottom:12
    }
}));

export default function OutlinedInputAdornments() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: '',
        password: '',
        email: '',
        nameError: ''
    });
    const validate = () => {
        let nameError = "";
        let passwordError = "";
        if (this.state.name < 1) {
            nameError = "empty";
        }
        if (nameError) {
            this.setState({ nameError });
            return false;
        }
        return true;
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const isValid = this.validate();
        if (isValid) {
            console.log(this.state)
            this.setState(this.initialState)
        }
    }
    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    return (
        <div className="login-container">
            <div className="login-flex">
                <div className="left-flex left-log">
                    <h2>WELCOME</h2>
                    <p>Enter your details and start your movie journey with us.</p>
                    <a href="/"><input type="submit" className="signup-btn" value="Signup" /> </a>

                </div>
                <div className="right-flex right-log" >
                    <h2>Login</h2>
                    <p>To keep connected with us, please login with your personal info.</p>

                    <div className={classes.root}>

                        <form className={clsx(classes.flexForm)} onSubmit={handleSubmit} method="post">

                            <div className={classes.field}>
                                <TextField

                                    id="outlined-adornment-weight"
                                    className={clsx(classes.margin, classes.textField)}
                                    variant="outlined"
                                    label="UserName"
                                    value={values.name}
                                    onChange={handleChange('name')}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">
                                            <IconButton edge="end">
                                                <AccountCircle />
                                            </IconButton>

                                        </InputAdornment>,
                                    }}
                                />
                            </div>
                            <div className={classes.field}>
                                <TextField
                                    id="outlined-adornment-password"
                                    className={clsx(classes.margin, classes.textField)}
                                    variant="outlined"
                                    type={values.showPassword ? 'text' : 'password'}
                                    label="Password"
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    edge="end"
                                                    aria-label="Toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                >
                                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                            <div className={(classes.field, classes.margin, classes.forgotPwd)}>
                                <a href="/forgot"> Forgot Password?</a>
                            </div>
                            <div className={classes.field}>
                                <Fab
                                    variant="extended"
                                    size="medium"
                                    aria-label="Add"
                                    className={(classes.margin, classes.submitBtn)}
                                >
                                    <NavigationIcon className={classes.extendedIcon} />
                                    Submit
                        </Fab>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}