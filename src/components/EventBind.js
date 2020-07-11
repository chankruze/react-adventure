import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello !"
        }

        // binding in constructor (binds once for one instance)
        // this.clickHandler = this.clickHandler.bind(this)
    }
    
    // clickHandler() {
    //     this.setState({
    //         message: "Goodbye !"
    //     })
    //     console.log(this)
    // }

    // class property as arrow function
    clickHandler = () => {
                this.setState({
            message: "Goodbye !"
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                {/* Binding in render method (binds new eh for each render) */}
                {/* <button onClick={this.clickHandler.bind(this)}>Bind!</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click!</button> */}
                <button onClick={this.clickHandler}>Click!</button>
            </div>
        )
    }
}

export default EventBind
