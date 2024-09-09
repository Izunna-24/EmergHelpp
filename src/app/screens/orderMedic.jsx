import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function MakeOrder() {
    const [details, setDetails] = useState('');
    const router = useRouter();

    const handleSubmit = () => {

        console.log('Order details:', details);
        router.push('/order-confirmation');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Make a Medic Order</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter order details"
                value={details}
                onChangeText={setDetails}
            />
            <Button title="Submit Order" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }
});
