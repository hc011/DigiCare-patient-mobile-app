import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ActivityIndicator,
  Alert
} from 'react-native';

import Header from '../../Components/Header';

const VerificationScreen = (props) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpModalVisible, setOtpModalVisible] = useState(false);
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State to manage loading state

  const handleOtpVerification = async () => {
    setIsLoading(true); // Start loading
    const api_url = "http://192.168.141.5:8000/userdata/login/";
    try {
      const response = await fetch(api_url, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone_number: mobileNumber,
          otp: otp,
        }),
      });
      if (response.status === 200) {
        props.checkOtp();
        props.login();
      } else {
        props.checkOtp();
      }
    } catch(error) {
      console.error('Error verifying OTP:', error);
      Alert.alert('Verification Error', 'An error occurred while verifying OTP.');
    } finally {
      setIsLoading(false); // End loading
      setOtpModalVisible(false); // Close the modal regardless of the outcome
      setMobileNumber(''); // Optionally clear the mobile number
      setOtp('');
    }
  };

  const generateOTP = async () => {
    setIsLoading(true); // Start loading
    const controller = new AbortController(); // Create a new instance of AbortController
    const timeoutId = setTimeout(() => controller.abort(), 10000); // Set timeout to abort the fetch request after 10 seconds
  
    try {
      const response = await fetch(`http://192.168.141.5:8000/userdata/getotp?phone_number=${encodeURIComponent(mobileNumber)}`, {
        signal: controller.signal, // Pass the AbortController's signal to the fetch request
      });
      clearTimeout(timeoutId); // Clear the timeout if the fetch completes in time
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setIsLoading(false);
      setOtpModalVisible(true);
      const data = await response.json();
      console.log(data); // Process response data
    } catch (error) {
      clearTimeout(timeoutId); // Ensure to clear the timeout in case of an error
      if (error.name === 'AbortError') {
        console.error('Fetch request was aborted due to timeout');
        Alert.alert('Timeout', 'Request timed out. Please try again.');
      } else {
        console.error('Error generating OTP:', error);
        Alert.alert('Error', 'Failed to generate OTP. Please try again.');
      }
      setIsLoading(false);
    } finally {

    }
  };
  

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.label}>Enter Mobile Number:</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          maxLength={10}
        />
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <TouchableOpacity style={styles.button} onPress={generateOTP}>
            <Text style={styles.buttonText}>Send OTP</Text>
          </TouchableOpacity>
        )}
      </View>

      <Modal visible={otpModalVisible} animationType="slide" transparent={true} >
      <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPressOut={() => {setOtpModalVisible(false);setIsLoading(false);}}
        >
          
        <View style={styles.modalContent}>
          <View style={{alignItems:'center'}}>
          <Text style={styles.label}>Enter OTP:</Text>
          <TextInput
            value={otp}
            onChangeText={setOtp}
            keyboardType="numeric"
            style={[styles.input, {fontSize:20}, {textAlign:'center'}, {width:80}]}
            maxLength={4}
          />
          </View>
          <View style={[{flexDirection:'row'},{justifyContent:'space-evenly'},{width:'100%'}]}>
          <TouchableOpacity style={[styles.button, styles.buttonOutline, {width:100}]} onPress={() => {setOtpModalVisible(false);setIsLoading(false)}}>
            <Text style={styles.buttonOutlineText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button,{width:100}]} onPress={handleOtpVerification}>
            <Text style={styles.buttonText}>Verify OTP</Text>
          </TouchableOpacity>
          </View>
        </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    width: '80%', // Use a percentage to control width for different screen sizes
    marginTop: '10%'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    fontSize:16
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    // fontWeight: 'bold',
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#007bff',
  },
  buttonOutlineText: {
    color: '#007bff',
    fontSize: 14,
    // fontWeight: 'bold',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Translucent overlay
  },
  modalContent: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // Only applies to Android
    marginTop: '50%', // Adjust based on your needs
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    width: '80%', // Adjust based on your layout needs
    borderRadius: 5,
  },
});

