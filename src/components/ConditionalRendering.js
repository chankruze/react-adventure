import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        // short circuit (render something or nothing)
        // return this.state.isLoggedIn && <h2>Welcome Bihari!</h2>

        // 03 [ternary operator]
        return this.state.isLoggedIn ? <h2>Welcome Bihari!</h2> : <h2>Welcome Guest!</h2>

        // 02
        // let message

        // if (this.state.isLoggedIn) {
        //     message = <h2>Welcome Bihari!</h2>
        // } else {
        //     message = <h2>Welcome Guest!</h2>
        // }

        // return (
        //     <div>
        //         {message}
        //     </div>
        // )

        // 01
        // if (this.state.isLoggedIn) {
        //     return <h2>Welcome Bihari!</h2>
        // } else {
        //     return <h2>Welcome Guest!</h2>
        // }

        // return (
        //     <div>
        //         <h2>Welcome Bihari!</h2>
        //         <h2>Welcome Guest!</h2>
        //     </div>
        // )
    }
}

export default ConditionalRendering
