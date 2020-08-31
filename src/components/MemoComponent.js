/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 01 2020 03:24:33 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'

function MemoComponent({name}) {
    console.log('[render] Memo Component')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComponent)
