import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button,
  ScrollView,
  Pressable
} from 'react-native';

import Header from '../../Components/Header';

import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

import validator from 'validator';
import {ip} from '../../assets/IPAdress'

const RegistrationPage = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // const [gender, setGender] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState(new Date());
  const [password, setPassword] = useState('')

  const [showDatePicker, setShowDatePicker] = useState(false); 

  const dateChangeHandler = (event, selectedDate) => {
    const currentDate = selectedDate || setDob;
    setShowDatePicker(false);
    setDob(currentDate);
  }

  const registerCall = async() => {
      const api_url = "http://"+ip+":8000/userdata/register/"
      var response;
      const DOB = format(dob, 'yyyy-MM-dd');
      try {
        response = await fetch(api_url, {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            phone_number: mobileNumber,
            first_name: firstName,
            last_name: lastName,
            dob: DOB,
            email: email,
            password: password
          }),
        });
        const data = await response.json();
        console.log(data);
    } catch(error) {
      console.log('Error veryfying OTP',error);
    } 
  }

  const handleRegister = () => {

    // Handle registration logic here (e.g., send data to server)
    console.log('Registration data:', {
      firstName,
      lastName,
      dob,
      mobileNumber,
      email,
      password
    });

    
    if( (!firstName.trim() 
    || !lastName.trim() 
    || dob.toISOString().slice(0,10) === (new Date()).toISOString().slice(0,10)
    || !mobileNumber.trim()
    || !email.trim()
    || !password.trim())){
      Alert.alert('Invalid details','Please enter valid inputs')
      return;
    }

  else if (!validator.isEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      setEmail("")
      return;
  }

  else if (mobileNumber.length != 10) {
      Alert.alert('Invalid mobile number', 'Please enter a valid mobile number.');
      setMobileNumber("")
      return;
  }
    
    //register api call here
    registerCall();

    props.onLogIn();

  };
  
  return (
    <View>
      <Header/>
    <ScrollView style={styles.container}>

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

      <View style={styles.datePicker}>
      <View style={[styles.dobText, styles.input]}><Text style={{color:'grey'}}>{format(dob, 'dd-MM-yyyy')}</Text></View>
      <TouchableOpacity onPress={()=>{setShowDatePicker(true)}} style={styles.datePickerButton}>
        <Text style={styles.buttonText} >Date of birth</Text>
      </TouchableOpacity>
      </View>

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={dob}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={dateChangeHandler}
        />
      )}


      {/* <View style={styles.gender}>
        <Picker
            selectedValue={gender}
            onValueChange={setGender}
        >
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Other" value="other" />
        </Picker>
      </View> */}
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

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />

      <Pressable style={styles.button} onPress={handleRegister} >
        <Text style={[styles.buttonText,{fontSize:16}]}>Register</Text>
      </Pressable>
      <TouchableOpacity style={[styles.button, {backgroundColor:'lightblue'}]}  onPress={props.uncheckOtp} touchableNative >
        <Text style={[styles.buttonText,{fontSize:16}]}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    borderRadius:30,
  },
  gender : {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderWidth: 1,
    borderColor: 'grey',
  },
  button: {
    backgroundColor: '#5B8DD3',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    marginBottom:5,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    
  },
  datePicker: {
    flexDirection:'row',
    // borderWidth:2,
    marginBottom:10,
    alignItems:'center',
  },
  dobText : {
    height:47,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 9.5,
    justifyContent:'center',
    width:100,
  },
  datePickerButton:{
    backgroundColor: '#5B8DD3',
    padding: 10,
    marginLeft:10,
    marginBottom:10,
    justifyContent:'center',
    borderRadius: 5,
  }
});

export default RegistrationPage;