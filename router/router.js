import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import Current from '../components/Current'
import Upcoming from '../components/Upcoming'

export const Tabs = TabNavigator({
    Upcoming: {
        screen: Upcoming
    },
    Current: {
        screen: Current
    }
})