/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Aug 31 2020 02:33:58 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Chandan'
        }

        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>LifecycleA </div>
                <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
