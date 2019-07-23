import React, { Component } from 'react'
import Nav from './nav';

class Landing extends Component {
    render() {
        return (
            <div>
                <div className="nav-bar">
                    <ul class="topnav">
                        <li><a class="active" href="#home">Home</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li class="right"><a href="#about">About</a></li>
                    </ul>
                </div>
                <Nav />
            </div>
        )
    }
}
export default Landing