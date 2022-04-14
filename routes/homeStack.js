import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";


const Stack = createNativeStackNavigator();

function homeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Review" component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default homeStack;