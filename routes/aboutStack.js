import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/about";
import Header from "../shared/header";
import React from "react";

const Stack = createNativeStackNavigator();

function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#eee",
          height: 60,
        },
        headerTintColor: "#444",
      }}
    >
      <Stack.Screen
        name="About screen"
        component={About}
        options={({ navigation }) => ({
          headerTitle: () => (
            <Header navigation={navigation} title="About Gamezone" />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default AboutStack;
