import React, { Component } from 'react';
import Test2 from './a2';

class Test1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            display:''
        
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleClick= e=>{
        // if (this.state.name != undefined) {
        //     alert('Welcome ' + this.state.name);
        // }
        this.setState({[e.target.display]:e.target.value})
        return(
            <Test2 data={this.state} />

        )
        // console.log(this.display)
    }
    render() {
if(this.handleClick == undefined){
    console.log("gee")
}
        return (
            <>
                <div>
                    Name:
                <input type="text" onChange={this.handleInput} name="name" placeholder="Enter name" /><br />
                    <button onClick={this.handleClick}>
                        Click me
                </button>

                </div>

            </>
        )

    }
}

export default Test1