import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { LoginPage } from "./views/LoginPage/Index";
import { DrawerComponent } from "./components/Drawer";

const Drawer = createDrawerNavigator();
const { Navigator, Screen } = createNativeStackNavigator();

export function Router() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Screen
          name="MainPage"
          component={DrawerComponent}
          options={{
            title: "Estoque",
            headerBackVisible: false,
            headerShown: false,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
