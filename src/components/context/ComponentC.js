/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Sep 04 2020 04:29:20 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentC extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username) => {
                        return <h3>Hello {username}</h3>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentC
