import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Switch } from 'react-native';

const BookingPage = (props) => {
    const [bookingForSelf, setBookingForSelf] = useState(false);
    const [name, setName] = useState('');
    const [reason, setReason] = useState('');
    const [contact, setContact] = useState('');
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');

    const handleConfirm = () => {
        //Add appointment api call
        props.navigation.pop(2);
        props.navigation.navigate('Token Status')
        // Here would be the logic to confirm the appointment, possibly sending the data to a server
    };

    const toggleSwitch = () => {
        setBookingForSelf(previousState  => {
            if (previousState) {
                // Currently booking for self, switch to booking for someone else
                // Clear all fields to simulate a completely new person being booked
                setName('');
                setContact('');
                setSex(''); // Ensure the 'sex' field is also cleared
                setAge('');
            } else {
                // Switching to booking for self, autofill from user's profile
                setName('John Doe');  // Simulated user data
                setContact('john.doe@example.com');
                setSex('male'); // Set a default or retrieved 'sex' from profile
                setAge('30');
            }
            return !previousState;
        });
    };
    
    

    const RadioButton = ({ label, value, onPress }) => {
        return (
            <TouchableOpacity style={styles.radioButtonContainer} onPress={() => onPress(value)}>
                <View style={[
                    styles.radioButton,
                    sex === value ? { borderColor: '#3498DB' } : { borderColor: '#ccc' }
                ]}>
                    {sex === value && (
                        <View style={styles.radioButtonIcon} />
                    )}
                </View>
                <Text style={styles.radioText}>{label}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.doctorSummary}>
                <Image source={require('../../assets/doctorDP__icon.jpg')} style={styles.profilePic} />
                <View style={styles.textContainer}>
                    <Text style={styles.doctorName}>Dr. Jane Smith</Text>
                    <Text style={styles.specialty}>Cardiologist</Text>
                </View>
            </View>

            <View style={styles.formContainer}>
                <View style={styles.switchContainer}>
                    <Text style={styles.label}>Booking for myself:</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#4A90E2" }}
                        thumbColor={bookingForSelf ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={bookingForSelf}
                    />
                </View>

                <Text style={styles.label}>Patient Name:</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Full Name"
                />

                <Text style={styles.label}>Sex:</Text>
                <View style={styles.radioGroup}>
                    <RadioButton label="Male" value="male" onPress={setSex} />
                    <RadioButton label="Female" value="female" onPress={setSex} />
                    <RadioButton label="Other" value="other" onPress={setSex} />
                </View>

                <Text style={styles.label}>Age:</Text>
                <TextInput
                    style={styles.input}
                    value={age}
                    onChangeText={setAge}
                    placeholder="Age"
                    keyboardType="numeric"
                />

                <Text style={styles.label}>Contact Information:</Text>
                <TextInput
                    style={styles.input}
                    value={contact}
                    onChangeText={setContact}
                    placeholder="Email or Phone"
                />

                <Text style={styles.label}>Reason for Visit:</Text>
                <TextInput
                    style={styles.inputLarge}
                    value={reason}
                    onChangeText={setReason}
                    placeholder="Brief description"
                    multiline
                />

                <TouchableOpacity style={styles.button} onPress={handleConfirm}>
                    <Text style={styles.buttonText}>Confirm Appointment</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECF0F1',
    },
    doctorSummary: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#5B8DD3',  // Light background for the header
        borderRadius: 10,  // Rounded corners
        shadowColor: '#000',  // Shadow for 3D effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,  // Elevation for Android
        marginHorizontal: 5,  // Horizontal margin for better spacing
        marginTop: 10,  // Top margin to space it from the top of the ScrollView
    },
    profilePic: {
        width: 80,
        height: 80,
        borderRadius: 40,  // Fully rounded corners for the image
        marginRight: 20,
    },
    textContainer: {
        flexDirection:"column"
    },
    doctorName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',  // Theme color for the text
    },
    specialty: {
        fontSize: 16,
        color: 'white',
    },
    formContainer: {
        paddingHorizontal: 20,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2C3E50',
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: '#CCC',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
    },
    inputLarge: {
        height: 80,
        borderColor: '#CCC',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        textAlignVertical: 'top',
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    radioButton: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    radioButtonIcon: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#3498DB',
    },
    radioText: {
        fontSize: 16,
        color: '#2C3E50',
    },
    radioGroup: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        backgroundColor: '#5B8DD3',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default BookingPage;
