/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 01 2020 04:13:00 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {

    constructor(props) {
        super(props)

        this.compRef = React.createRef()
    }
    
    clickHandler = () => {
        this.compRef.current.focusInput()
    }

    render() {
        return (
            <div>
                <Input ref={this.compRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
