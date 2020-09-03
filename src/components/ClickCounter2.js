/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Sep 04 2020 03:02:52 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { Component } from 'react'

class ClickCounter2 extends Component {
    render() {
        const {count, incrementCount} = this.props
        return (
            <button onClick={incrementCount}>Clicked {count} times</button>
        )
    }
}

export default ClickCounter2
