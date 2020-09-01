/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Sep 02 2020 02:29:16 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'

function Hero({ heroName }) {
    if (heroName === 'Joker') {
        throw new Error(`${heroName} is Not a hero ;(`)
    }
    return (
        <div>
            <h1>{heroName} is a Hero !</h1>
        </div>
    )
}

export default Hero
