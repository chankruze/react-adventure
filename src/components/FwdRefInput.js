/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 01 2020 04:18:33 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'

// function FwdRefInput() {
//     return (
//         <div>
//             <input type="text" />
//         </div>
//     )
// }

const FwdRefInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})

export default FwdRefInput
