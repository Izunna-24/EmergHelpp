import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const Register = () => {
    const navigation = useNavigation();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const [isPickerVisible, setIsPickerVisible] = useState(false);

    const handleSetProfileClick = () => {
        if (firstName && lastName && gender && phoneNumber && email && password) {
            setSubmitted(true);
            navigation.navigate('Dashboard');
        } else {
            Alert.alert("Error", "Please fill in all the fields before submitting!");
        }
    };

    const handleBecomeAMedicClick = () => {
        if (firstName && lastName && gender && phoneNumber && email && password) {
            setSubmitted(false);
            navigation.navigate('Dashboard');
        }
        // else {
        //     Alert.alert("Error", "Please fill in all the fields before submitting!");
        // }
    };

    const handleGenderSelect = (selectedGender) => {
        setGender(selectedGender);
        setIsPickerVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Set Your Profile</Text>

                <TextInput
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={setFirstName}
                    style={styles.input}
                    placeholderTextColor={"black"}
                />
                <TextInput
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={setLastName}
                    style={styles.input}
                    placeholderTextColor={"black"}
                />


                <TouchableOpacity
                    style={styles.input}
                    onPress={() => setIsPickerVisible(true)}
                >
                    <Text style={{ color: gender ? 'black' : '#999' }}>
                        {gender ? gender : "Select Gender"}
                    </Text>
                </TouchableOpacity>


                <Modal
                    transparent={true}
                    visible={isPickerVisible}
                    animationType="slide"
                    onRequestClose={() => setIsPickerVisible(false)}
                >
                    <TouchableWithoutFeedback onPress={() => setIsPickerVisible(false)}>
                        <View style={styles.modalOverlay}>
                            <View style={styles.pickerContainer}>
                                <TouchableOpacity
                                    style={styles.pickerOption}
                                    onPress={() => handleGenderSelect("Male")}
                                >
                                    <Text style={styles.pickerOptionText}>Male</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.pickerOption}
                                    onPress={() => handleGenderSelect("Female")}
                                >
                                    <Text style={styles.pickerOptionText}>Female</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

                <TextInput
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="number-pad"
                    style={styles.input}
                    placeholderTextColor={"black"}
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    style={styles.input}
                    placeholderTextColor={"black"}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                    placeholderTextColor={"black"}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSetProfileClick}
                >
                    <Text style={styles.buttonText}>Set Profile</Text>
                </TouchableOpacity>

                {submitted && (
                    <View style={styles.successMessage}>
                        <Text style={styles.successText}>Profile successfully created!</Text>
                    </View>
                )}

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backLink}
                >
                    <AntDesign name="arrowleft" size={16} color="black" />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>

                <Text style={styles.footerText}>
                    Already have an account?
                    <Text
                        style={styles.dashboardLink}
                        onPress={() => navigation.navigate('Dashboard')}
                    >
                        Dashboard
                    </Text>
                </Text>


                <Text style={styles.footerText}>
                    Want to be a part of our team?
                    <Text
                        style={styles.medicRegisterLink}
                        onPress={() => navigation.navigate('medicRegister')}
                    >
                        Become A Medic
                    </Text>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        padding: 20,
    },
    card: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
        width: '100%',
        height: '80%',
        maxWidth: 400,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        borderColor: '#cccccc',
        color: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: 12,
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#E0F7FA',
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    successMessage: {
        marginTop: 20,
        backgroundColor: '#d4edda',
        padding: 10,
        borderRadius: 5,
    },
    successText: {
        color: '#155724',
    },
    backLink: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,

    },
    backText: {
        color: 'black',
        marginLeft: 8,
    },
    footerText: {
        textAlign: 'center',
        marginTop: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    dashboardLink: {
        color: 'black',
        fontWeight: 'normal',
        textDecorationLine: 'underline',
        marginLeft: 4,
    },

    medicRegisterLink:{
        color: 'black',
        fontWeight: 'normal',
        textDecorationLine: 'underline',
        marginLeft: 4,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    pickerContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        width: '80%',
    },
    pickerOption: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    pickerOptionText: {
        fontSize: 18,
        textAlign: 'center',
    },

});

export default Register;
