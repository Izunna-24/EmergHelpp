import {Stack,Slot} from "expo-router";
import {useFonts}  from "expo-font";
import {StyleSheet,Text,View} from "react-native";


const RootLayout = () => {
    return(
        <Stack>
            <Stack.Screen name='acceptOrder'  />
            <Stack.Screen name='orderMedic'  />
            {/*<Stack.Screen name='(tabs)'  />*/}
            {/*<Stack.Screen name='(auth)'  />*/}
        </Stack>
    )
}
