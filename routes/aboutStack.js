import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/about";

const Stack = createNativeStackNavigator();

function homeStack() {
  return (
    <NavigationContainer>
           <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#eee",
            height: 60,
          },
          headerTintColor: "#444",
        }}
      >
        <Stack.Screen name="About" component={About}  />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

export default homeStack;
