/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Sep 02 2020 03:31:11 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
    render() {
        // deconstruct props
        const { count, incrementCount } = this.props
        
        return (
            <h2 onMouseOver={incrementCount}>
                Hovered {count} times
            </h2>
        )
    }
}

// call modifier function to enhance the component
export default withCounter(HoverCounter)
