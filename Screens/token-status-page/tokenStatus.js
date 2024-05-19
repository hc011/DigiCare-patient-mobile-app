import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, Easing, ScrollView, Button } from 'react-native';

import { useSelector } from 'react-redux';
import { update} from '../../api/update';

import { getCheckupCabin } from '../../api/getCheckupCabin'
import { getPosition } from '../../api/getPosition';

const TokenStatus = () => {
    const selectedDoctor = useSelector(state => state.doctor.selectedDoctorSlice);
    const selectedHospital = useSelector(state => state.hospital.selectedHospital);
    const [queueNumber, setQueueNumber] = useState(1);
    const [animate, setAnimate] = useState(false);
    const rippleAnimation = useRef(new Animated.Value(0)).current;
    const appointmentDetails = useSelector(state => state.appointmentDetails);
    const [currentPosition, setCurrentPosition] = useState();

    updatePosition = async() =>{
        let pos = await getPosition(appointmentDetails.appointmentId);
        setCurrentPosition(pos);
    }

    useEffect(() => {
        updatePosition();
    }, [])

    useEffect(() => {
        if (animate) {
            Animated.timing(rippleAnimation, {
                toValue: 1,
                duration: 1000,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true
            }).start(() => {
                rippleAnimation.setValue(0);
                setAnimate(false);
            });
        }
    }, [currentPosition]);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true);
            updatePosition();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const estimatedWaitTime = 'Approximately 15 minutes';

    const checkIn = async() => {
        const cabinDetails = await getCheckupCabin(String(selectedDoctor.id), String(selectedHospital.registration_id));
        const pos = await update({event: 'checkin', cabinId: String(cabinDetails.id), appointment_id: appointmentDetails.appointmentId});
        setCurrentPosition(pos);
    }   

    const checkStatus = async() => {
        // const cabinId = await getCheckupCabin(String(selectedDoctor.id), String(selectedHospital.registration_id))
        // console.log(cabinId)
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.circle}>
                <Animated.View style={[styles.ripple, rippleStyle(rippleAnimation)]} />
                <Text style={styles.queueNumber}>{currentPosition}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                
                <View style={{margin:10}}><Button title='check-in' onPress={checkIn} /></View>
                <View style={{margin:10}}><Button title='check-status' onPress={checkStatus}/></View>
            </View>

            <View style={styles.detailsCard}>
                <Text style={styles.sectionTitle}>Doctor Information</Text>
                <Text style={styles.detail}>Name: {selectedDoctor.name}</Text>
                <Text style={styles.detail}>Speciality: {selectedDoctor.specialization}</Text>
                <Text style={styles.detail}>Experience: {selectedDoctor.experience} years+</Text>

                <Text style={styles.sectionTitle}>Appointment Details</Text>
                <Text style={styles.detail}>Date: April 27, 2024</Text>
                <Text style={styles.detail}>Time: 10:00 AM</Text>
                <Text style={styles.detail}>Estimated Wait Time: {estimatedWaitTime}</Text>
                <Text style={styles.detail}>Location: 123 Health Street, Wellness City</Text>

                <Text style={styles.sectionTitle}>Contact & Policy</Text>
                <Text style={styles.detail}>Phone: (+91) {selectedHospital.phone_number}</Text>
                <Text style={styles.detail}>Email: {selectedHospital.email}</Text>
                <Text style={styles.detail}>Cancellation Policy: Free cancellation up to 24 hours before the appointment.</Text>
            </View>
        </ScrollView>
    );
};

const rippleStyle = (rippleAnimation) => ({
    opacity: rippleAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0.6, 0]
    }),
    transform: [
        {
            scale: rippleAnimation.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, 1, 2],
            })
        }
    ]
});

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f4f4f4',
    },
    circle: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#3498db',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    ripple: {
        position: 'absolute',
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
    queueNumber: {
        fontSize: 36,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    detailsCard: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3498db',
        marginBottom: 10,
    },
    detail: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
    }
});

export default TokenStatus;
