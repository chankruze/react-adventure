/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Sep 02 2020 02:33:51 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { Component } from 'react'

class ErrorBound extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch = (error, info) => {
        console.log(error);
        console.log(info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong ;(</h1>
        }

        return this.props.children
    }
}

export default ErrorBound
