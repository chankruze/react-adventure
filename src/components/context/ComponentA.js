/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Sep 04 2020 04:28:58 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { Component } from 'react'
import ComponentB from './ComponentB'

// 1. create the context
// 2. provide a context value
// 3. consume the context where required

class ComponentA extends Component {
    render() {
        return (
            <ComponentB/>
        )
    }
}

export default ComponentA
