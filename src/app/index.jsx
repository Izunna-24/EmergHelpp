import {View,Text} from "react-native";
import Register from "./components/register";
import {Redirect} from "expo-router";

const Home = () =>{
    return(
        <Redirect href={'/components/register'}/>
    )
}

export default Home;