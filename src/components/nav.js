import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
// import Tab from './tab'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.addActiveClass = this.addActiveClass.bind(this);
        this.state = {
            movies: [],
        }
    }
    addActiveClass() {
        let active=document.getElementsByClassName(this.btn)[0];
        active.style.backgroundColor = "red";

    }
    render() {

        return (
            <>
                <div className="nav-bar" id="myBtnContainer">
                    <a href='/latest'><button className="btn active" onClick={this.addActiveClass}>Now Playing</button></a>
                    <a href='/'><button className="btn " onClick={this.addActiveClass}> Popular</button></a>
                    <a href='/rated'><button className="btn" onClick={this.addActiveClass}> Top Rated</button></a>
                    <a href='/upcoming'><button className="btn" onClick={this.addActiveClass}> Upcoming</button></a>
                </div>
                {/* <Tab /> */}
            </>
        )
    }
}
export default Nav