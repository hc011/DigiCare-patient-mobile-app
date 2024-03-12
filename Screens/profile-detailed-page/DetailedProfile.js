import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import RatingStars from '../../Components/RatingStars';
import Header from '../../Components/Header';

// Mock data for demonstration purposes
const clinicInfo = {
  id: 1,
  clinicName: 'Maharaja Raj Bahadur Clinic',
  clinicTiming: '10:00 AM - 8:00 PM',
  clinicRate: '250 Rs',
  clinicRating: 3.5,
  imageUrl: 'https://example.com/clinic-image.jpg', // Replace with an actual image URL
  description: 'This clinic offers comprehensive healthcare services, including general practice, pediatrics, and specialized care for chronic conditions.',
  services: [
    'General Consultation',
    'Pediatric Care',
    'Chronic Disease Management',
  ],
  doctors: [
    { name: 'Dr. John Doe', specialization: 'General Practitioner' },
    { name: 'Dr. Jane Smith', specialization: 'Pediatrician' }
  ],
};

const ClinicDetailPage = () => {
    
    return (
        <View style={styles.container}>
          <Header />
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Image source={require('../../assets/doctorDP__icon.jpg')} style={styles.clinicImage} />
            <Text style={styles.clinicName}>{clinicInfo.clinicName}</Text>
            <RatingStars rating={clinicInfo.clinicRating} />
            <Text style={styles.clinicTiming}>{clinicInfo.clinicTiming}</Text>
            <Text style={styles.clinicRate}>{clinicInfo.clinicRate}</Text>
    
            {/* Wrapped each section in a View with style 'tile' to create tiles */}
            <View style={styles.tile}>
              <Text style={styles.sectionTitle}>About</Text>
              <Text style={styles.sectionContent}>{clinicInfo.description}</Text>
            </View>
    
            <View style={styles.tile}>
              <Text style={styles.sectionTitle}>Services Offered</Text>
              {clinicInfo.services.map((service, index) => (
                <Text key={index} style={styles.serviceItem}>{service}</Text>
              ))}
            </View>
    
            <View style={styles.tile}>
              <Text style={styles.sectionTitle}>Doctors</Text>
              {clinicInfo.doctors.map((doctor, index) => (
                <Text key={index} style={styles.doctorItem}>{doctor.name} - {doctor.specialization}</Text>
              ))}
            </View>
    
            {/* Commented out booking button for simplicity in this example */}
          </ScrollView>
        </View>
      );
};

// Styles remain the same
const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        backgroundColor: '#fff',
        // paddingLeft: 20,
        // paddingRight:20
    },
      container: {
        flex: 1,
    },
    clinicImage: {
      alignSelf: 'center',
      width: 300,
      height: 300,
      borderRadius: 15, // Slightly increased for a softer look
      marginBottom: 20, // Increased spacing
    },
    clinicName: {
      fontSize: 28, // Slightly larger for emphasis
      fontWeight: 'bold',
      color: '#333', // Darker shade for better readability
      textAlign: 'center', // Center-align the clinic name
      marginBottom: 10, // Adjusted spacing
    },
    clinicTiming: {
      fontSize: 18, // Slightly larger for better readability
      color: '#666',
      textAlign: 'center', // Center-align for consistency
      marginBottom: 5, // Adjusted spacing
    },
    clinicRate: {
      fontSize: 18, // Uniform font size with timing
      color: '#666',
      textAlign: 'center', // Center-align for consistency
      marginBottom: 20, // Increased spacing before the next section
    },
    section: {
      marginTop: 30, // Increased spacing to distinguish sections clearly
      paddingHorizontal: 10, // Added horizontal padding for better text alignment
    },
    sectionTitle: {
      fontSize: 20, // Slightly larger for emphasis
      fontWeight: 'bold',
      color: '#0f5cc6', // Use primary color for titles to enhance visual hierarchy
      marginBottom: 10, // Increased spacing
    },
    sectionContent: {
      fontSize: 16,
      color: '#666',
      lineHeight: 24, // Increased line height for better readability
      textAlign: 'justify', // Justify align for cleaner text presentation
    },
    serviceItem: {
      fontSize: 16,
      color: '#666',
      marginBottom: 5, // Added space between items for clarity
    },
    doctorItem: {
      fontSize: 16,
      color: '#666',
      marginBottom: 5, // Added space between items for clarity
    },
    bookButton: {
      marginTop: 30, // Increased spacing from the last section
      backgroundColor: '#0f5cc6',
      paddingVertical: 15, // Increased padding for a larger, more clickable area
      paddingHorizontal: 20, // Increased padding for a wider button
      borderRadius: 10, // Softened the corners for a modern look
      alignItems: 'center',
      alignSelf: 'center', // Center the button horizontally
      width: '80%', // Make the button wider for easier access
    },
    bookButtonText: {
      color: 'white',
      fontSize: 18, // Slightly larger text for better visibility
      fontWeight: 'bold', // Bold text for emphasis
    },
    tile: {
        backgroundColor: '#fff', // Light background for the tile
        borderRadius: 8, // Rounded corners for the tile
        padding: 15, // Inner padding within the tile
        marginVertical: 10, // Space between tiles
        marginHorizontal: 20, // Align tiles nicely with some horizontal space
        // Shadow properties for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // Elevation for Android
        elevation: 3,
        marginLeft:20,
        marginRight:20
      },
  });
  

export default ClinicDetailPage;
