import React, { Component } from 'react';
// import Test1 from './components/a1';

class Test2 extends Component {
    render() {
        // let {handleSubmit} = this.props;

        return (
            <div>
               hello  {this.props.data.name}
            </div>  
        )
    }
}
export default Test2