/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 01 2020 04:22:19 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { Component } from 'react'
import FwdRefInput from './FwdRefInput'

class FwdRefParent extends Component {

    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <FwdRefInput ref={this.inputRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FwdRefParent
