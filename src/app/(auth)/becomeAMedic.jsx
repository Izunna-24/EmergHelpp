import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Modal,
    TouchableWithoutFeedback
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';



const RegisterMedic = () => {
    const navigation = useNavigation();


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const [isPickerVisible, setIsPickerVisible] = useState(false);
    const [isSpecializationPickerVisible, setIsSpecializationPickerVisible] = useState(false);


    const handleBecomeAMedicClick = () => {
        if (firstName && lastName && gender && phoneNumber && email && specialization && password) {
            setSubmitted(true);
            navigation.navigate('Dashboard');
        } else {
            Alert.alert("Error", "Please fill in all the fields before submitting!");
        }
    };


    const handleGenderSelect = (selectedGender) => {
        setGender(selectedGender);
        setIsPickerVisible(false);
    };

    const handleSpecializationSelect = (selectedSpecialization) => {
        setSpecialization(selectedSpecialization);
        setIsSpecializationPickerVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Become A Medic</Text>

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


                <TouchableOpacity
                    style={styles.input}
                    onPress={() => setIsSpecializationPickerVisible(true)} // Opens specialization modal
                >
                    <Text style={{ color: specialization ? 'black' : '#999' }}>
                        {specialization ? specialization : "Select Specialization"}
                    </Text>
                </TouchableOpacity>

                <Modal
                    transparent={true}
                    visible={isSpecializationPickerVisible}
                    animationType="slide"
                    onRequestClose={() => setIsSpecializationPickerVisible(false)}
                >
                    <TouchableWithoutFeedback onPress={() => setIsSpecializationPickerVisible(false)}>
                        <View style={styles.modalOverlay}>
                            <View style={styles.pickerContainer}>
                                <TouchableOpacity
                                    style={styles.pickerOption}
                                    onPress={() => handleSpecializationSelect("Cardiology")}
                                >
                                    <Text style={styles.pickerOptionText}>Cardiology</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.pickerOption}
                                    onPress={() => handleSpecializationSelect("Neurology")}
                                >
                                    <Text style={styles.pickerOptionText}>Neurology</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.pickerOption}
                                    onPress={() => handleSpecializationSelect("Pediatrics")}
                                >
                                    <Text style={styles.pickerOptionText}>Pediatrics</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.pickerOption}
                                    onPress={() => handleSpecializationSelect("Orthopedics")}
                                >
                                    <Text style={styles.pickerOptionText}>Orthopedics</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.pickerOption}
                                    onPress={() => handleSpecializationSelect("Nurse")}
                                >
                                    <Text style={styles.pickerOptionText}>Nurse</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.pickerOption}
                                    onPress={() => handleSpecializationSelect("Lab Scientist")}
                                >
                                    <Text style={styles.pickerOptionText}>Lab Scientist</Text>
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
                    onPress={handleBecomeAMedicClick}
                >
                    <Text style={styles.buttonText}>Become A Medic</Text>
                </TouchableOpacity>

                {submitted && (
                    <View style={styles.successMessage}>
                        <Text style={styles.successText}>Medic profile created!</Text>
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
        padding: 40,
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
        maxWidth: 400,
        transform: [{ scale: 1.05 }],
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
        padding: 15,
        width: '100%',
        marginBottom: 12,
    },

    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent background
    },
    pickerContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '80%',  // Adjust to your liking
        maxWidth: 300, // Optional: max width for larger screens
        alignItems: 'center',  // Center picker options horizontally
    },
    pickerOption: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',  // Make option take full width of picker container
    },
    pickerOptionText: {
        fontSize: 18,
        textAlign: 'center',
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
        color: 'black',
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
        textDecorationLine: 'underline',
        marginLeft: 4,
    },
});

export default RegisterMedic;
