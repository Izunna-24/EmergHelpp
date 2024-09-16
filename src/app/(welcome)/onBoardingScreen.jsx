import React, { useRef, useEffect } from 'react';
import { View, Animated, Easing, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '../../assets/img/logo.png';
import { useRouter } from 'expo-router';

export default function OnBoardingScreen() {
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const router = useRouter();

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(scaleAnim, {
                    toValue: 1.2,
                    duration: 1000,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [scaleAnim]);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Bringing health emergency response closer to you...</Text>
            <View style={styles.content}>
                <Animated.Image
                    source={logo}
                    style={[styles.logo, { transform: [{ scale: scaleAnim }] }]}
                />
                <View style={styles.footerContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.textContainer} onPress={() => router.push('/register')}>
                            <Text style={styles.getStartedText}>SIGN-UP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.textContainer} onPress={() => router.push('/becomeAMedic')}>
                            <Text style={styles.getStartedText}>BECOME A MEDIC</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#DD4C49' },
    headerText: {
        position: 'absolute', top: 20, width: '100%', color: 'white',
        fontSize: 18, fontWeight: 'bold', textAlign: 'center',
        paddingHorizontal: 10, paddingVertical: 5, textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 4,
    },
    content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    logo: { width: 400, height: 400 },
    footerContainer: { position: 'absolute', bottom: 20, width: '100%', alignItems: 'center' },
    buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
    textContainer: {
        backgroundColor: 'white', padding: 15, borderRadius: 10,
        shadowColor: '#000', shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3, shadowRadius: 5, elevation: 5, marginHorizontal: 10
    },
    getStartedText: { color: 'red', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }
});
