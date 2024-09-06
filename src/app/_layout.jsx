import {Stack} from "expo-router";



const RootLayout = () =>{
    return(
        <Stack>
            <Stack.Screen name="index"/>
            <Stack.Screen name="components" options={{headerShown: false}}/>
        </Stack>
     )
}

export default RootLayout;