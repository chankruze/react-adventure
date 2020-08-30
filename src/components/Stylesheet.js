/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Aug 30 2020 11:03:26 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import './style.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : '';
    return (
        <div>
            <h1 className={className}>Stylesheet</h1>
        </div>
    )
}

export default Stylesheet
