import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const AppStack = () => {
	const getTabBarVisibility = route => {
		const routeName = route.state ? route.state.routes[route.state.index].name : ''

		if (routeName === 'Chat') {
			return false
		}
		return true
	}

	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: '#2e64e5',
			}}></Tab.Navigator>
	)
}

export default AppStack
