/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Sep 04 2020 03:23:30 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { Component } from 'react'

class Counter2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    countHandler = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }

    render() {
        return (
            <div>
                {this.props.children(this.state.count, this.countHandler)}
                {/* {this.props.render(this.state.count, this.countHandler)} */}
            </div>
        )
    }
}

export default Counter2
