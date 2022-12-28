import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetialScreen from "./src/screens/DetialScreen";
import VerticalPage1 from "./src/screens/vertical/VerticalPage1";
import HomeScreen from "./src/screens/HomeScreen";
import VerticalPage2 from "./src/screens/vertical/VerticalPage2";
import VerticalPage3 from "./src/screens/vertical/VerticalPage3";
import VerticalPage4 from "./src/screens/vertical/VerticalPage4";
import VerticalPage5 from "./src/screens/vertical/VerticalPage5";
import VerticalPage6 from "./src/screens/vertical/VerticalPage6";
import VerticalPage7 from "./src/screens/vertical/VerticalPage7";
import VerticalPage9 from "./src/screens/vertical/VerticalPage9";
import VerticalPage8 from "./src/screens/vertical/VerticalPage8";
import VerticalPage10 from "./src/screens/vertical/VerticalPage10";
import VerticalPage11 from "./src/screens/vertical/VerticalPage11";
import VerticalPage12 from "./src/screens/vertical/VerticalPage12";
import HorizontalPage1 from "./src/screens/horizontal/HorizontalPage1";
import HorizontalPage2 from "./src/screens/horizontal/HorizontalPage2";
import HorizontalPage3 from "./src/screens/horizontal/HorizontalPage3";
import HorizontalPage4 from "./src/screens/horizontal/HorizontalPage4";
import HorizontalPage5 from "./src/screens/horizontal/HorizontalPage5";
import HorizontalPage6 from "./src/screens/horizontal/HorizontalPage6";
import HorizontalPage7 from "./src/screens/horizontal/HorizontalPage7";
import HorizontalPage8 from "./src/screens/horizontal/HorizontalPage8";
import HorizontalPage9 from "./src/screens/horizontal/HorizontalPage9";
import HorizontalPage10 from "./src/screens/horizontal/HorizontalPage10";
import HorizontalPage11 from "./src/screens/horizontal/HorizontalPage11";
import HorizontalPage12 from "./src/screens/horizontal/HorizontalPage12";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="VerticalPage1" component={VerticalPage1} />
        <Stack.Screen name="VerticalPage2" component={VerticalPage2} />
        <Stack.Screen name="VerticalPage3" component={VerticalPage3} />
        <Stack.Screen name="VerticalPage4" component={VerticalPage4} />
        <Stack.Screen name="VerticalPage5" component={VerticalPage5} />
        <Stack.Screen name="VerticalPage6" component={VerticalPage6} />
        <Stack.Screen name="VerticalPage7" component={VerticalPage7} />
        <Stack.Screen name="VerticalPage8" component={VerticalPage8} />
        <Stack.Screen name="VerticalPage9" component={VerticalPage9} />
        <Stack.Screen name="VerticalPage10" component={VerticalPage10} />
        <Stack.Screen name="VerticalPage11" component={VerticalPage11} />
        <Stack.Screen name="VerticalPage12" component={VerticalPage12} />
        <Stack.Screen name="HorizontalPage1" component={HorizontalPage1} />
        <Stack.Screen name="HorizontalPage2" component={HorizontalPage2} />
        <Stack.Screen name="HorizontalPage3" component={HorizontalPage3} />
        <Stack.Screen name="HorizontalPage4" component={HorizontalPage4} />
        <Stack.Screen name="HorizontalPage5" component={HorizontalPage5} />
        <Stack.Screen name="HorizontalPage6" component={HorizontalPage6} />
        <Stack.Screen name="HorizontalPage7" component={HorizontalPage7} />
        <Stack.Screen name="HorizontalPage8" component={HorizontalPage8} />
        <Stack.Screen name="HorizontalPage9" component={HorizontalPage9} />
        <Stack.Screen name="HorizontalPage10" component={HorizontalPage10} />
        <Stack.Screen name="HorizontalPage11" component={HorizontalPage11} />
        <Stack.Screen name="HorizontalPage12" component={HorizontalPage12} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
