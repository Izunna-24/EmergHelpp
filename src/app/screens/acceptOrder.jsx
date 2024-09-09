import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function AcceptOrder() {
    const router = useRouter();

    const handleAccept = () => {
        console.log('Order accepted');
        router.push('/order-accepted');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Accept a Medic Order</Text>
            <Button title="Accept Order" onPress={handleAccept} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 }
});
