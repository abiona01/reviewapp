import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AboutStack from "./AboutStack";
import HomeStack from "./HomeStack";

const Drawer = createDrawerNavigator();

export default function rootDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutStack}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}