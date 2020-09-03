/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Sep 04 2020 04:42:16 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (obj) => {
                        const {name, hairType} = obj
                    return <h3>{name} has {hairType} hair</h3>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF
