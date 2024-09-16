
import {View,Text} from "react-native"
import Register from "./(auth)/register"
import {Redirect} from "expo-router";

const Index = () =>{
    return(

        <Redirect href={'(welcome)/onBoardingScreen'}/>
    )
}
export default Index;