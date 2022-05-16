import {useState } from 'react';
import * as Font from 'expo-font';
import HomeScreen from "./screens/home";
import { View, Text, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/drawer"

const getFonts = () => Font.loadAsync({
   'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });
    



export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if(fontsLoaded) {
    return (
     <Navigator />
    )}
    else {
     return(
        <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log(err)}
        />
     )
    }
 
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})