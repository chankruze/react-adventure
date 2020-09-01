/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Sep 02 2020 01:41:17 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>Portal Demo</h1>,
        document.getElementById("portal-root")
    )
}

export default PortalDemo
