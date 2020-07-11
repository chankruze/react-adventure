import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* access using props object, */}
            <button onClick={props.greetHandler}>Greet Parent</button>
            {/* if need to pass params use arrow fn */}
            <button onClick={() => props.greetHandler('Johny')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
