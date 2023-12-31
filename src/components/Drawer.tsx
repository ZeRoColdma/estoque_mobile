import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import { MainPage } from "../views/MainPage/Index";
import { ProductsPage } from "../views/ProductsPage/Index";
import { LogOut } from "../util/logout/Index";

export function DrawerComponent() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Resumo" component={MainPage} />
      <Drawer.Screen name="Produtos" component={ProductsPage} />
      <Drawer.Screen name="Vendas" component={ProductsPage} />
      <Drawer.Screen name="Logout" component={LogOut} />
    </Drawer.Navigator>
  );
}
