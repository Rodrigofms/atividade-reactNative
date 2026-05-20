import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import AppList from "./AppList"
import AppForm from "./AppForm"

const { Navigator, Screen } = createBottomTabNavigator()

function AppTab() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                tabBarActiveTintColor: "#693fca",
                tabBarInactiveTintColor: "#c1bccc",
                tabBarActiveBackgroundColor: "#ebebf5",
                tabBarInactiveBackgroundColor: "#fafafc",
                tabBarLabelStyle: {
                    fontSize: 13,
                    position: "absolute",
                    top: 15,
                    bottom: 0,
                    left: 0,
                    right: 0
                },
                tabBarIconStyle: { display: "none" },
                headerShown: false
            }}>
                <Screen name="AppList" component={AppList} options={{
                    tabBarLabel: "Lista de Compras"
                }} />
                <Screen name="AppForm" component={AppForm} options={{
                    tabBarLabel: "Adicionar ao Carrinho"
                }} />
            </Navigator>
        </NavigationContainer>

    )
}


export default AppTab