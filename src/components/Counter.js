import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment() {
        // object as argument
        // this.setState({
        //     count: this.state.count + 1
        // }, () => console.log(this.state.count))

        // function as argument to access the previous state
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }), () => console.log(this.state.count))
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter
