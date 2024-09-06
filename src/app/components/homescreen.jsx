// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';


const HomeScreen = () => {
    const router = useRouter();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to the Home Screen</Text>
            <Button
                title="Go to Register"
                title="Go to Become A Medic"     // onPress={() => router.push('/register')}
            />
        </View>
    );
};

export default HomeScreen;
