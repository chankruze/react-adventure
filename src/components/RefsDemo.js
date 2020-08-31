/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 01 2020 03:50:27 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)

        // 1: create the ref 
        this.inputRef = React.createRef();
        // callaback ref
        this.cbRef = null;
        this.setCbRef = (elem) => {
            this.cbRef = elem
        }
    }

    componentDidMount() {
        // 3: <focus> action on DOM
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
        if (this.cbRef) {
            // node property accessed directly
            this.cbRef.focus()
        }
    }

    clickHandler = () => {
        // capture value from DOM
        alert(`Input 1: ${this.inputRef.current.value}\nInput 2: ${this.cbRef.value}`)
    }

    render() {
        return (
            <div>
                {/* 2: attach the reference */}
                <div>
                    <label>Input 1</label>
                    <input type="text" ref={this.inputRef} />
                </div>
                <br />
                {/* 2: attach the reference (using set callback ref function) */}
                <div>
                    <label>Input 2</label>
                    <input type="text" ref={this.setCbRef} />
                </div>
                <br />
                <button onClick={this.clickHandler}>submit</button>
            </div>
        )
    }
}

export default RefsDemo
