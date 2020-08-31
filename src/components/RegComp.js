/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 01 2020 02:56:13 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { Component } from 'react'

export class RegComp extends Component {
    render() {
        console.log('[render] Regular Component')
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegComp
