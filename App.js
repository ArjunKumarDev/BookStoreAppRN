import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import { BookDetail } from "./screens";

console.log(DefaultTheme, "checking");
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        {/* Tabs */}
        <Stack.Screen name="Home" component={Tabs} />

        {/* Screens */}
        <Stack.Screen
          name="BookDetail"
          component={BookDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
