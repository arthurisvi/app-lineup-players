import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import Footballers from "./src/screens/Footballers";
import Lineup from "./src/screens/Lineup";
import LineupProvider from "./src/contexts/lineup";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LogoHeader() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("./assets/logo-scc.png")}
    />
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1C1C1C",
          height: 60,
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
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
      <LineupProvider>
        <Stack.Navigator
          screenOptions={{
            headerTitle: (props) => <LogoHeader {...props} />,
            title: "Manager SCC",
            headerStyle: {
              backgroundColor: "#1C1C1C",
              height: 100,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen name="Main" component={Tabs} />
          <Stack.Screen name="Footballers" component={Footballers} />
        </Stack.Navigator>
      </LineupProvider>
    </NavigationContainer>
  );
}
