import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '../../assets/img/logo.png';
import illustration from '../../assets/img/illustration (2).png';
import { useRouter } from 'expo-router';

export default function OnBoardingScreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.headerText}>Bringing health emergency response closer to you...</Text>
            </View>
            <View style={styles.heroSection}>
                <Image source={illustration} style={styles.illustration} />
                <Text style={styles.heroText}>Fast, reliable, and efficient medical assistance at your fingertips.</Text>
            </View>
            <View style={styles.buttonColumn}>
                <TouchableOpacity
                    style={[styles.button, styles.shadow]}
                    onPress={() => router.push('/sign-in')}
                >
                    <Text style={styles.buttonText}>SIGN-UP</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.shadow]}
                    onPress={() => router.push('/become-a-medic')}
                >
                    <Text style={styles.buttonText}>BECOME A MEDIC</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0F7FA',
        paddingHorizontal: 15,
        justifyContent: 'center',
    },
    header: {
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
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    illustration: {
        width: 250,
        height: 150,
        marginBottom: 15,
    },
    heroText: {
        color: '#00796B',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        paddingHorizontal: 15,
    },
    buttonColumn: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
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
