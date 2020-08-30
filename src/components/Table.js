/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Aug 31 2020 03:23:28 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import Columns from './Columns'

function Table() {
    const items = [
        {
            id: 1,
            title: "One"
        },
        {
            id: 2,
            title: "Two"
        }
    ]

    return (
        // short hand syntax of React.Fragment
        <>
            {
                items.map(item => (
                    <React.Fragment key={item.id}>
                        <p>Title</p>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
            <table>
                <tbody>
                    <tr>
                        <Columns />
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Table
