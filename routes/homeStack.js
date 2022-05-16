import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";
import React from "react";

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#eee",
          height: 60,
        },
        headerTintColor: "#444",
        
        // header: (props) => <Header {...props} />,
      }}
    >
      <Stack.Screen
        name="Home screen"
        component={HomeScreen}
        options={({navigation}) => ({
          headerTitle: () => <Header navigation={navigation} title="Gamezone" />,
        })}
      />
      <Stack.Screen
        name="Review"
        component={ReviewDetails}
        // options={() => ({
        //   title: () => <Header />,
        // })}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
