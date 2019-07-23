import React, { Component } from 'react'
import Popular from './content'
import Playing from './playing'
import Rated from './rated'
import Upcoming from './upcoming';

class Tab extends Component{

    render(){
        return(
            <div>
                <Popular/>
                <Playing/>
                <Rated/>
                <Upcoming/>
            </div>

        )
    }
}
export default Tab