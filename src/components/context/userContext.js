/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Sep 04 2020 04:33:22 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'

const UserContext = React.createContext('Default User')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext