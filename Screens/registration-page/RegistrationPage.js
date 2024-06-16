import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Pressable,
  ActivityIndicator,
  Image,
} from "react-native";

import { TextInput, Button } from "react-native-paper";
import React, { useState } from "react";

import { useSelector } from "react-redux";

import { register } from "../../api/register";

import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import validator from "validator";

import fontSizes from "../../constants/fontSizes";

const RegistrationPage = (props) => {
  const mobileSlice = useSelector((state) => state.mobile.mobileNumber);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState(mobileSlice);
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState(new Date());
  const [password, setPassword] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dateChangeHandler = (event, selectedDate) => {
    const currentDate = selectedDate || setDob;
    setShowDatePicker(false);
    setDob(currentDate);
  };

  const registerUser = async () => {
    const DOB = format(dob, "yyyy-MM-dd");
    setIsLoading(true);
    try {
      const response = await register({
        mobileNumber,
        firstName,
        lastName,
        DOB,
        email,
        password,
      });
      if (response.status === 201) {
        setIsLoading(false);
        props.navigation.navigate("Profile");
      } else if (response.status === 400) {
        // navigation.goBack();
        Alert.alert("Registration unsuccessful, Please try again");
        console.log("register unsuccess ");
      }
    } catch (error) {
      console.log("Error registering user", error);
    }
  };

  const handleRegister = async () => {
    console.log("Registration data:", {
      firstName,
      lastName,
      dob,
      mobileNumber,
      email,
      password,
    });

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      dob.toISOString().slice(0, 10) ===
        new Date().toISOString().slice(0, 10) ||
      !mobileNumber.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      Alert.alert("Invalid details", "Please enter valid inputs");
      return;
    } else if (!validator.isEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      setEmail("");
      return;
    } else if (mobileNumber.length != 10) {
      Alert.alert(
        "Invalid mobile number",
        "Please enter a valid mobile number."
      );
      setMobileNumber("");
      return;
    }

    registerUser();
  };

  return (
    <View style={{ marginTop: 50, padding: 10, alignItems: "center" }}>
      <Text style={{ fontSize: fontSizes.h2 }}>Complete Your Profile</Text>
      <ScrollView style={styles.container}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require("../../assets/cropped-empty_profile.jpg")}
            style={styles.profileImage}
          />
        </View>

        <TextInput
          style={styles.input}
          mode="outlined"
          theme={{
            roundness: 10,
          }}
          activeOutlineColor="#5B8DD3"
          label="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />

        <TextInput
          style={styles.input}
          mode="outlined"
          theme={{
            roundness: 10,
          }}
          activeOutlineColor="#5B8DD3"
          label="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />

        <View style={styles.datePicker}>
          {/* <View style={[styles.dobText, styles.input]}><Text style={{color:'grey'}}>{format(dob, 'dd-MM-yyyy')}</Text></View> */}
          <Pressable
            onPress={() => {
              setShowDatePicker(true);
            }}
          >
            <TextInput
              style={[styles.input, { width: 115, marginBottom: -2 }]}
              mode="outlined"
              theme={{
                roundness: 10,
              }}
              label="Date of birth"
              value={format(dob, "dd-MM-yyyy")}
              editable={false}
            />
          </Pressable>

          {/* <TouchableOpacity onPress={()=>{setShowDatePicker(true)}} style={styles.datePickerButton}>
          <Text style={styles.buttonText} >Select date</Text>
        </TouchableOpacity> */}
        </View>
        {isLoading && <ActivityIndicator size="large" color="#0000ff" />}

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
          mode="outlined"
          theme={{
            roundness: 10,
          }}
          activeOutlineColor="#5B8DD3"
          label="Mobile Number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          maxLength={10}
        />

        <TextInput
          style={styles.input}
          keyboardType="email-address"
          mode="outlined"
          theme={{
            roundness: 10,
          }}
          activeOutlineColor="#5B8DD3"
          label="Email"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          mode="outlined"
          theme={{
            roundness: 10,
          }}
          activeOutlineColor="#5B8DD3"
          label="Password"
          value={password}
          onChangeText={setPassword}
        />

        {/* <Pressable style={styles.button} onPress={handleRegister}>
          <Text style={[styles.buttonText, { fontSize: 16 }]}>Register</Text>
        </Pressable> */}
        <Button
          mode="contained"
          onPress={handleRegister}
          contentStyle={{
            padding: 8,
            alignItems: "center",
            width: "100%",
          }}
          labelStyle={{ fontSize: fontSizes.buttonLarge }}
          style={{
            borderRadius: 30,
            backgroundColor: "#5B8DD3",
            marginTop: 40,
          }}
        >
          <Text style={styles.buttonText}>Complete Profile</Text>
        </Button>
        {/* <TouchableOpacity style={[styles.button, {backgroundColor:'lightblue'}]}  onPress={props.navigation.goBack} touchableNative >
        <Text style={[styles.buttonText,{fontSize:16}]}>Back</Text>
      </TouchableOpacity> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },

  container: {
    marginTop: 20,
    backgroundColor: "white",
    // padding: 10,
    // borderWidth: 1,
    borderColor: "grey",
    // borderRadius: 18,
    width: "90%",
    alignSelf: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#ddd", // Add a border for better visibility
  },
  profileImagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImageText: {
    fontSize: fontSizes.caption,
    color: "#333", // Adjust text color for better contrast
  },
  input: {
    backgroundColor: "white",
    marginBottom: 10,
  },
  gender: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderWidth: 1,
    borderColor: "grey",
  },
  button: {
    backgroundColor: "#5B8DD3",
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  datePicker: {
    flexDirection: "row",
    // borderWidth:2,
    marginBottom: 10,
    alignItems: "center",
  },
  dobText: {
    borderRadius: 100,
    height: 47,
    borderWidth: 1,
    borderColor: "grey",
    padding: 9.5,
    justifyContent: "center",
    width: 100,
  },
  datePickerButton: {
    backgroundColor: "#5B8DD3",
    alignSelf: "flex-end",
    padding: 5,
    marginLeft: 10,
    marginBottom: 10,
    justifyContent: "center",
    borderRadius: 5,
  },
});

export default RegistrationPage;
