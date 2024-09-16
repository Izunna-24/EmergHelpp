import {Stack,Slot} from "expo-router";
import {useFonts,}  from "expo-font";
import {StyleSheet,Text,View} from "react-native";
import {StatusBar} from "expo-status-bar"


const RootLayout = () => {
    return(
        <>
        <Stack>
            <Stack.Screen
                name="becomeAMedic"
                options={{
                    headerShown: false,
                }}

            />
            <Stack.Screen
                name="register"
                options={{
                    headerShown: false,
                }}

            />
        </Stack>

            <StatusBar backgroundColor="#DD4C49" style="light" />
            </>
    )
}
