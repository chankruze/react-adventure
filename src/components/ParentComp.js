/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 01 2020 02:56:21 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { Component } from 'react'
// import RegComp from './RegComp'
// import PureComp from './PureComp'
import MemoComponent from './MemoComponent'

export class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'khushu'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'chandan'
            })
        }, 3000)
    }

    render() {
        console.log('[render] Parent Component')
        return (
            <div>
                check console...
                <MemoComponent name={this.state.name}/>
                {/* <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComp
