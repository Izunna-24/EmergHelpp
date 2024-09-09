import {Stack,Slot} from "expo-router";
import {useFonts}  from "expo-font";
import {StyleSheet,Text,View} from "react-native";


const RootLayout = () => {
    return(
        <Stack>
            <Stack.Screen name='index'  />
            <Stack.Screen name='screens'  />
            <Stack.Screen name='(tabs)'  />
            <Stack.Screen name='(auth)'  />
            <Stack.Screen name='(welcome)'  />
        </Stack>
     )
}
