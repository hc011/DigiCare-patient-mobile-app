import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {  useState } from 'react';

import { useDispatch } from 'react-redux';
import { setMobileNumberSlice } from '../../storage/mobileNumberSlice';

import { getotp } from '../../api/getotp';
import { login } from '../../api/login'

const VerificationScreen = (props) => {
  const dispatch = useDispatch();

  const [mobileNumber, setMobileNumber] = useState('');
  const [otpModalVisible, setOtpModalVisible] = useState(false);
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleOtpVerification = async () => {
    setIsLoading(true);
    try {
      const response = await login({mobileNumber, otp});
      if (response.status === 200) {
        setIsLoading(false); 
        setOtpModalVisible(false); 
        setMobileNumber(''); 
        setOtp('');
        dispatch(setMobileNumberSlice(mobileNumber));
        props.navigation.navigate('Profile')
      } 
      else if(response.status === 400){
        setIsLoading(false); 
        setOtpModalVisible(false); 
        setMobileNumber(''); 
        setOtp('');
        dispatch(setMobileNumberSlice(mobileNumber));
        props.navigation.navigate('Registration');
      }
      else if(response.status === 401) {
        Alert.alert('Incorrect OTP, Please try again');
        setOtp('');
      }
    } catch(error) {
      console.error('Error verifying OTP:', error);
      Alert.alert('Verification Error', 'An error occurred while verifying OTP.');
    }
  };

  const generateOTP = async () => {
    setIsLoading(true); 
    const controller = new AbortController(); // Create a new instance of AbortController
    const timeoutId = setTimeout(() => controller.abort(), 5000); // Set timeout to abort in 5 seconds
    const signal = controller.signal; 
    try {
      const response = await getotp({signal, mobileNumber})
      clearTimeout(timeoutId); // Clear the timeout if the fetch completes in time
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      else{
        setIsLoading(false);
        setOtpModalVisible(true);
      } 
    } catch (error) {
        clearTimeout(timeoutId); // Ensure to clear the timeout in case of an error
        if (error.name === 'AbortError') {
          console.error('Fetch request was aborted due to timeout');
          Alert.alert('Timeout', 'Request timed out. Please try again.');
        } else {
          console.error('Error generating OTP:', error);
          Alert.alert('Error', 'Failed to generate OTP. Please try again.');
        } 
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <View style={styles.container}>
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

          <View style={{alignItems:'center', marginBottom:20}}>
          <Text style={[styles.label, {fontSize:24}]}>Enter OTP</Text>
          <TextInput
            value={otp}
            onChangeText={setOtp}
            keyboardType="numeric"
            style={[styles.input, {fontSize:20}, {textAlign:'center'}, {width:80}]}
            maxLength={4}
            placeholder='_ _ _ _'
          />
          </View>

          <View style={[{flexDirection:'row'},{justifyContent:'space-evenly'},{width:'100%'}]}>
          <TouchableOpacity style={[styles.button, {width:100,backgroundColor:'lightblue'}]} onPress={() => {setOtpModalVisible(false);setIsLoading(false);setOtp('');}}>
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
    // width: '80%',
    // marginTop: '10%',
    backgroundColor:'white',
    padding:20,
    marginTop: 30,
    borderWidth:1,
    borderColor:'grey',
    borderRadius:18,
    width:'90%',
    alignSelf:'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
    backgroundColor: '#5B8DD3',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    // fontWeight: 'bold',
  },
  buttonOutlineText: {
    color: 'black',
    fontSize: 16,
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
    elevation: 15,
    marginTop: '50%', 
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

