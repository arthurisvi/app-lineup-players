import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Footballers from "./src/screens/Footballers";
import Lineup from "./src/screens/Lineup";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Lineup"
        component={Lineup}
        options={{ title: "Escalação" }}
      />
      <Tab.Screen
        name="Footballers"
        component={Footballers}
        options={{ title: "Jogadores" }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: "Manager SCC",
        }}
      >
        <Stack.Screen name="AppHome" component={Tabs} />
        <Stack.Screen name="Footballers" component={Footballers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
