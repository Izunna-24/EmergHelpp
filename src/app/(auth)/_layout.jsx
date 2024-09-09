import {Stack,Slot} from "expo-router";
import {useFonts,}  from "expo-font";
import {StyleSheet,Text,View} from "react-native";
import {StatusBar} from "expo-status-bar"


const RootLayout = () => {
    return(
        <>
        <Stack>
            <Stack.Screen
                name="sign-up"
                options={{
                    headerShown: false,
                }}

            />
            <Stack.Screen
                name="become a medic"
                options={{
                    headerShown: false,
                }}

            />
        </Stack>

            <StatusBar backgroundColor="#DD4C49" style="light" />
            </>
    )
}
