/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Sep 04 2020 04:29:06 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './userContext'

class ComponentB extends Component {

    // only for class & only register to one context
    static contextType = UserContext

    render() {
        return (
            <React.Fragment>
                <h4>Component B context = {this.context}</h4>
                <ComponentC />
            </React.Fragment>
        )
    }
}

export default ComponentB
