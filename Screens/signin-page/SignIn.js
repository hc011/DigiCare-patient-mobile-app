import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { Button } from "react-native-paper";

import { TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import fontSizes from "../../constants/fontSizes";
import { getotp } from "../../api/getotp";
import { setMobileNumberSlice } from "../../storage/mobileNumberSlice";
import { setUserDetailsSlice } from "../../storage/userDetailsSlice";

const VerificationScreen = (props) => {
  const dispatch = useDispatch();
  const [mobileNumber, setMobileNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generateOTP = async () => {
    if (!mobileNumber) {
      Alert.alert("Please enter mobile number.");
      return;
    }
    setIsLoading(true);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    const signal = controller.signal;
    try {
      const response = await getotp({ signal, mobileNumber });
      clearTimeout(timeoutId);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        dispatch(setUserDetailsSlice({ phone_number: mobileNumber }));
        setMobileNumber("");
        props.navigation.navigate("otpVerification");
        setIsLoading(false);
      }
    } catch (error) {
      clearTimeout(timeoutId);
      if (error.name === "AbortError") {
        console.error("Fetch request was aborted due to timeout");
        Alert.alert("Timeout", "Request timed out. Please try again.");
      } else {
        console.error("Error generating OTP:", error);
        Alert.alert("Error", "Failed to generate OTP. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.container}>
          <Text style={styles.signInText}>Sign In</Text>
          <View style={styles.content}>
            <Text style={styles.label}>Mobile Number:</Text>
            <TextInput
              mode="outlined"
              outlineColor="#F0F0F0"
              activeOutlineColor="#808080"
              style={styles.input}
              keyboardType="phone-pad"
              placeholder="Enter your mobile number"
              value={mobileNumber}
              onChangeText={setMobileNumber}
              maxLength={10}
            />
            {isLoading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              <Button
                mode="contained"
                onPress={generateOTP}
                contentStyle={{
                  padding: 8,
                  alignItems: "center",
                  width: "100%",
                }}
                labelStyle={{ fontSize: fontSizes.buttonLarge }}
                style={{ borderRadius: 30, backgroundColor: "#5B8DD3" }}
              >
                <Text style={styles.buttonText}>Sign In</Text>
              </Button>
            )}
          </View>

          <Text style={styles.motto}>
            Portal to simplify managing your health and wellness is on the way{" "}
            {"\n"}➜
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
  },
  signInText: {
    fontSize: fontSizes.h1,
    paddingTop: 60,
  },
  content: {
    padding: 20,
    marginTop: 60,
    width: "90%",
  },
  motto: {
    textAlign: "left",
    fontSize: 40,
    marginTop: 30,
    color: "#595959",
    paddingHorizontal: 5,
    fontWeight: "600",
  },
  label: {
    color: "#000000",
    fontSize: fontSizes.h5,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 30,
    borderRadius: 5,
    fontSize: fontSizes.input,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#5B8DD3",
    // padding: 8,
    borderRadius: 30,
    alignItems: "center",
    width: "100%",
    // alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: fontSizes.buttonLarge,
  },
});
