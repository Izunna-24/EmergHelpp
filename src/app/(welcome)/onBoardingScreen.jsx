// import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '../../assets/img/logo.png';
import illustration from '../../assets/img/illustration (2).png';
import { useRouter } from 'expo-router';
import { Animated } from 'react-native';
import React, { useRef, useEffect } from 'react';



export default function OnBoardingScreen() {
    const router = useRouter();
    const scaleAnim = useRef(new Animated.Value(1)).current;


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
    container: {
        flex: 1,
        backgroundColor: '#E0F7FA',
        paddingHorizontal: 15,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 15,
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 8,
    },
    headerText: {
        color: '#00796B',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 10,
    },
    heroSection: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    illustration: {
        width: 300,
        height: 200,
        marginBottom: 20,
    },
    heroText: {
        color: '#00796B',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    buttonColumn: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 25,
        marginVertical: 10,
        width: '80%',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 6,
    },
});
