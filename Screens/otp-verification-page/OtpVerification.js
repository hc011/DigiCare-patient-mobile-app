import React from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ActivityIndicator,
  Platform,
} from "react-native";
import { useState } from "react";
import { OtpInput } from "react-native-otp-entry";
import fontSizes from "../../constants/fontSizes";
import { Button } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../api/login";
import { setUserDetailsSlice } from "../../storage/userDetailsSlice";

const OtpVerification = (props) => {
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log(otp);
  const { phone_number } = useSelector((state) => state.user.userDetails);
  console.log("ph", phone_number, "otp", otp);

  const handleOtpVerification = async () => {
    try {
      setIsLoading(true);
      const response = await login({ phone_number, otp });
      console.log(response);

      if (response.status === 200) {
        setIsLoading(false);
        // setOtpModalVisible(false);
        setOtp("");
        dispatch(setUserDetailsSlice(response.data));
        props.navigation.navigate("Profile");
      } else if (response.status === 404) {
        console.log("here");
        setOtp("");
        props.navigation.navigate("Registration");
      } else if (response.status === 400) {
        Alert.alert("Incorrect OTP, Please try again");
        setOtp("");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      Alert.alert(
        "Verification Error",
        "An error occurred while verifying OTP."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <Text
        style={{ fontSize: fontSizes.h1, fontWeight: "500", marginBottom: 10 }}
      >
        Verify Code
      </Text>
      <Text
        style={{
          fontSize: fontSizes.paragraph,
          fontWeight: "500",
          color: "gray",
        }}
      >
        Please enter the code sent to your mobile.
      </Text>
      <OtpInput
        numberOfDigits={4}
        focusColor="#5B8DD3"
        onTextChange={(text) => setOtp(text)}
        containerStyle={styles.otpInput}
        inputsContainerStyle={styles.inputsContainer}
        pinCodeContainerStyle={styles.pinCodeContainer}
        pinCodeTextStyle={styles.pinCodeText}
        focusStickStyle={styles.focusStick}
        focusStickBlinkingDuration={500}
        onPress={() => console.log("press")}
      />

      <Text style={{ marginBottom: -10 }}>Didn't receive OTP?</Text>
      <Button style={styles.Resendbutton} textColor="#5B8DD3">
        <Text style={{ textDecorationLine: "underline" }}>Resend code</Text>
      </Button>

      <View style={styles.verifyButtonContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Button
            mode="contained"
            style={{
              borderRadius: 30,
              backgroundColor: "#5B8DD3",
              width: "90%",
            }}
            contentStyle={{ padding: 8, alignItems: "center" }}
            labelStyle={{ fontSize: fontSizes.buttonLarge }}
            onPress={handleOtpVerification}
          >
            <Text
              style={{
                fontSize: fontSizes.buttonLarge,
              }}
            >
              Verify
            </Text>
          </Button>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    width: "85%",
    alignSelf: "center",
    alignItems: "center",
    paddingBottom: 40,
    // borderWidth: 1,
  },
  otpInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    paddingHorizontal: 10,
    paddingVertical: 40,
  },
  verifyButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    alignItems: "center",
  },
  VerifyButton: {
    width: "90%",
    // padding: 8,
    borderRadius: 50,
    backgroundColor: "#5B8DD3",
    // marginTop: 50,
  },
  Resendbutton: {
    color: "#5B8DD3",
    // marginBottom: 0,
  },
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pinCodeContainer: {
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pinCodeText: {
    fontSize: fontSizes.h4,
    textAlign: "center",
  },
  focusStick: {
    // Adjust as needed
  },
});

export default OtpVerification;
