/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Sep 04 2020 03:07:05 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { Component } from 'react'

class HoverCounter2 extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
            <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
        )
    }
}

export default HoverCounter2
