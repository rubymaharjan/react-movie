import React, { Component } from 'react';
import Page from './page';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 20
        }
    }
    render() {
        return (
            <Page data={this.state} />
        );
    }
}
export default Main