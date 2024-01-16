import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  StyleSheet,
  Image
} from 'react-native';

const VerificationScreen = (props) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpModalVisible, setOtpModalVisible] = useState(false);
  const [otp, setOtp] = useState(''); // State to store the received OTP

  const handleMobileNumberChange = (newNumber) => {
    setMobileNumber(newNumber);
  };

  const handleSendOtpPress = () => {
    // Simulate sending OTP (replace with actual API call)
    setOtp('123456'); // Set a sample OTP for demonstration
    setOtpModalVisible(true);
  };

  const handleOtpVerification = () => {
    // Handle OTP verification logic here
    // console.log('OTP entered:', otp);

    if (otp === '123456') {
      // OTP verification successful
      // ...
    } else {
      // OTP verification failed
      // ...
    }
  };

  return (
    <View style={styles.container}>
      <View style={{alignItems:'center', backgroundColor:'#86B6F6',marginTop:-390 }} ><View style={{borderWidth:1, width:400}} /><Image style={styles.logo} source={require('../../assets/digitalCare__logo.jpg')}/><View style={{borderWidth:1, width:400}} /></View>

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

        <Button title="Send OTP" onPress={handleSendOtpPress} />
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
          <Button title="Verify OTP" onPress={props.checkOtp} />
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
  logo: {
    resizeMode:'contain',
    height:70,
    width:200,
    // margin:10,
    // borderWidth:1,
    borderColor:'red',
  },
});

export default VerificationScreen;
