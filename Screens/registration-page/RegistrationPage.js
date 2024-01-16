import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import validator from 'validator';

const RegistrationPage = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {

    // Handle registration logic here (e.g., send data to server)
    console.log('Registration data:', {
      firstName,
      lastName,
      gender,
      mobileNumber,
      email,
    });

    if (!validator.isEmail(email)) {
        Alert.alert('Invalid Email', 'Please enter a valid email address.');
        setEmail("")
        return;
    }

    if (!validator.isInt(mobileNumber)) {
        Alert.alert('Invalid mobile number', 'Please enter a valid mobile number.');
        setMobileNumber("")
        return;
    }

    props.onLogIn();

  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      
      <View style={styles.gender}>
        <Picker
            selectedValue={gender}
            onValueChange={setGender}
        >
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Other" value="other" />
        </Picker>
      </View>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        maxLength={10}
      />

      <TextInput
        style={styles.input}
        keyboardType="email-address"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Button onPress={props.uncheckOtp} title='back'></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 13,
  },
  gender : {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderColor: 'grey',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    marginBottom:20
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default RegistrationPage;