import React from 'react'

// destructuring props
const Greet = ({ name, heroName }) => {
    // or
    // const {name, heroName} = props
    console.log(props)
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {props.children}
        </div>
    )
}

export default Greet