import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Pappa!'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    // define the method
    greetParent(name) {
        this.setState({
            parentName: name
        }, () => alert(`Hello ${this.state.parentName}`))

    }

    render() {
        return (
            <div>
                {/* pass as props to the child */}
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
