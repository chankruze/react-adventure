/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Sep 02 2020 03:30:41 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'

// function to enhance original component
const withCounter = (WrappedComponent) => {
    // Enhanced Component
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
            
            this.state = {
                count: 0
            }
        }

        // function to increase the counter
        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + this.props.increment }
            })
        }

        // original component with props added
        render() {
            return (<WrappedComponent 
                count={this.state.count} 
                incrementCount={this.incrementCount}
                {...this.props}/>)
        }
    }

    return WithCounter
}

export default withCounter