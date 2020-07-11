import React, { Component } from 'react'

class ClassClick extends Component {

    classClickHandler() {
        console.log("Class button clicked")
    }
    
    render() {
        return (
            <div>
                <button onClick={this.classClickHandler}>Cls Click</button>
            </div>
        )
    }
}

export default ClassClick
