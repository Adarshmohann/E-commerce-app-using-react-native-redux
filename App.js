import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Products from "./src/components/product";
import Cart from './src/components/cart'
import { Provider } from 'react-redux';
import { mystore } from "./store/store"


const stack = createStackNavigator()


export default function App(){
    return(
        <Provider store={mystore}>
            <NavigationContainer>
                <stack.Navigator>
                    <stack.Screen name="Products" component={Products}
                    options={{headerShown: false}}/>
                    <stack.Screen name="Cart" component={Cart}
                    options={{headerShown: false}}/>
                </stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
