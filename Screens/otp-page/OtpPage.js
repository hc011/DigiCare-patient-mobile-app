import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  StyleSheet,
  Alert,
} from 'react-native';

import Header from '../../Components/Header';

const VerificationScreen = (props) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpModalVisible, setOtpModalVisible] = useState(false);
  const [otp, setOtp] = useState(''); // State to store the received OTP

  // const handleMobileNumberChange = (newNumber) => {
  //   setMobileNumber(newNumber);
  // };

  // const handleSendOtpPress = () => {
  //   // Simulate sending OTP (replace with actual API call)
  //   setOtp('123456'); // Set a sample OTP for demonstration
  //   setOtpModalVisible(true);
  // };

  const handleOtpVerification = async (mobileNumber) => {
    const api_url = "http://192.168.1.7:8000/userdata/login/"
    var response;
    try {
      response = await fetch(api_url, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone_number: mobileNumber,
          otp: otp,
        }),
      });
      const data = await response.json();
      console.log(data);
  } catch(error) {
    console.log('Error veryfying OTP',error);
  } 

  if(response.status === 200){
    props.checkOtp();
    props.login();
    setMobileNumber('');
  } else{
    props.checkOtp();
  }
};

  function handleInvalidOtp(){
    setOtpModalVisible(false);
    setOtp('');
  }

  const generateOTP = async (mobileNumber) => {
      //Api call to generate otp in the backend
    try {
      const response = await fetch(`http://192.168.1.7:8000/userdata/getotp?phone_number=${encodeURIComponent(mobileNumber)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);  // Process response data
    } catch (error) {
      console.error('Error generating OTP:', error);
    }

    setOtpModalVisible(true);

  };
  
  return (
    <View style={styles.container}>
      <Header />

      <View style={{marginTop:-200}}>
        <Text style={{fontWeight:'bold', fontSize:20, marginBottom:5}}>Enter Mobile Number:</Text>
        <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            maxLength={10}
        />

        <Button title="Send OTP" onPress={() => generateOTP(mobileNumber)} />
      </View>
      
      
      <Modal visible={otpModalVisible} animationType="slide">
        <View style={styles.modalContent}>
          <Text>Enter OTP:</Text>
          <TextInput
            value={otp}
            onChangeText={setOtp}
            keyboardType="numeric"
            style={styles.otpInput}
          />
          <Button title="Verify OTP" onPress={() => handleOtpVerification(mobileNumber)} />
          <Button title="Back" onPress={() => {setOtpModalVisible(false); setOtp('')}} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop:-400,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 25,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
  },
  otpInput: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  
});

export default VerificationScreen;
