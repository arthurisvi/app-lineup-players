import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Footballers from "./src/screens/Footballers";
import Lineup from "./src/screens/Lineup";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lineup" component={Lineup} />
        <Stack.Screen name="Footballers" component={Footballers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
