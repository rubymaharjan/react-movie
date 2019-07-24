
import React, { Component } from 'react'

const fact = () => {
    
}
class Forgot extends Component {
    state = {
        n: 3
    }
    render() {
        if (this.state.n <= 1) {
            return 1;

        }
        else {
            return "the factorial of given number is: " + (this.state.n * (this.state.n - 1))
        }
    }
}
export default Forgot