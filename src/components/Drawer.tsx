import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import { MainPage } from "../views/MainPage/Index";

export function DrawerComponent() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Resumo" component={MainPage} />
    </Drawer.Navigator>
  );
}
