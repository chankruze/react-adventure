/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Aug 31 2020 02:41:52 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Aug 31 2020 02:33:58 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Chandan'
        }

        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate')
    }

    render() {
        console.log('LifecycleB render')
        return (
            <div>
                LifecycleB 
            </div>
        )
    }
}

export default LifecycleB
