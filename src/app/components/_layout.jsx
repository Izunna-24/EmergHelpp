import {Stack} from "expo-router";



const RootLayout = () =>{
    return(
        <Stack>
            <Stack.Screen name="register" options={{headerShown:false}}/>
            <Stack.Screen name="medic_register"/>
        </Stack>
    )
}

export default RootLayout;