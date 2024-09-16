import {Stack,Slot} from "expo-router";



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
};

export default RootLayout;