import React, { Component } from 'react';


class Page extends Component {

    render() {
        console.log("this is homepage", this.props);
        return (
            <div> 
                hello {this.props.data}
                </div>
        );
    }
}

export default Page;