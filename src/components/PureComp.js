/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 01 2020 02:56:02 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { PureComponent } from 'react'

// pure component is class based & memo is function based
class PureComp extends PureComponent {
    render() {
        console.log('[render] Pure Component')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp
