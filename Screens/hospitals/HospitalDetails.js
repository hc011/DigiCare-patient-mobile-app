import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Pressable } from 'react-native';

import { useSelector } from 'react-redux';

const HospitalDetails = (props) => {
    const selectedHospital = useSelector(state => state.hospital.selectedHospital);
    const handlePress = () => {
        props.navigation.navigate('Doctor List')
    }
    
    return (
        <View style={styles.container}>
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Image source={require('../../assets/doctorDP__icon.jpg')} style={styles.clinicImage} />
            <Text style={styles.clinicName}>{selectedHospital.hospital_name}</Text>
            <Text style={styles.shortInfo}>🌟 {selectedHospital.rating} / 5 (200 Reviews)</Text>
            <Text style={styles.shortInfo}>9am to 8pm</Text>
            <Text style={styles.shortInfo}>Rs 500</Text>
            
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={{color:'white', fontSize: 18,}}>See doctors...</Text>
            </TouchableOpacity>
            
            <View style={styles.tile}>
                <Text style={styles.sectionTitle}>About</Text>
                <Text style={styles.sectionContent}>Description here</Text>
            </View>
    
            <View style={styles.tile}>
              <Text style={styles.sectionTitle}>Services Offered</Text>
            </View>

          </ScrollView>
        </View>
      );
};

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
    shortInfo: {
      fontSize: 18, // Uniform font size with timing
      color: '#666',
      textAlign: 'center', // Center-align for consistency
      marginBottom: 5, // Increased spacing before the next section
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
    button: {
        backgroundColor: '#5B8DD3',
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10
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
  

export default HospitalDetails;
