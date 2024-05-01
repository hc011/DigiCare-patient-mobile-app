import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const DoctorProfile = (props) => {
    const handleAppointmentBooking = () => {
        props.navigation.navigate('Book Appointment');
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.headerContainer}>
                    <Image 
                        source={require('../../assets/doctorDP__icon.jpg')} 
                        style={styles.profilePic} 
                    />
                    <Text style={styles.name}>Dr. John Doe</Text>
                    <Text style={styles.speciality}>Cardiology Specialist</Text>
                    <Text style={styles.rating}>🌟 4.5 / 5 (200 Reviews)</Text>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.sectionHeader}>Contact Information</Text>
                    <Text style={styles.infoText}>Phone: (123) 456-7890</Text>
                    <Text style={styles.infoText}>Email: johndoe@example.com</Text>
                    <Text style={styles.infoText}>Address: 123 Medicine Rd, Health City</Text>

                    <Text style={styles.sectionHeader}>Professional Details</Text>
                    <Text style={styles.infoText}>Qualifications: MD, PhD - Cardiology</Text>
                    <Text style={styles.infoText}>Years of Experience: 20 years</Text>
                    <Text style={styles.infoText}>Affiliations: American Cardiology Association</Text>

                    <Text style={styles.sectionHeader}>Availability</Text>
                    <Text style={styles.infoText}>Monday - Friday: 9:00 AM - 5:00 PM</Text>
                    <Text style={styles.infoText}>Emergency: 24/7 on call</Text>

                    <Text style={styles.sectionHeader}>Insurance</Text>
                    <Text style={styles.infoText}>Accepted Plans: Most major insurance plans accepted</Text>

                    <Text style={styles.sectionHeader}>Languages Spoken</Text>
                    <Text style={styles.infoText}>English, Hindi</Text>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={handleAppointmentBooking}>
                <Text style={styles.buttonText}>Book Appointment</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECF0F1',
    },
    scrollContainer: {
        flex: 1,
    },
    scrollViewContent: {
        paddingBottom: 100,
    },
    headerContainer: {
        backgroundColor: '#7FA4D9',
        paddingBottom: 30,
        marginTop: 5,
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    profilePic: {
        width: 140,
        height: 140,
        borderRadius: 70,
        marginTop: 40,
        borderWidth: 5,
        borderColor: '#fff',
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 10,
    },
    speciality: {
        fontSize: 20,
        color: '#fff',
        marginVertical: 5,
    },
    rating: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 10,
    },
    infoContainer: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        margin: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 20,
        marginBottom: 10,
    },
    infoText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
    },
    button: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        backgroundColor: '#5B8DD3',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});


export default DoctorProfile;
