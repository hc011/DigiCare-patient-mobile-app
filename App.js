import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import OtpPage from './Screens/otp-page/OtpPage'
import Profile from './Screens/profile-page/Profile';
import RegistraionPage from './Screens/registration-page/RegistrationPage';

export default function App() {
  
  const [isLogIn, setIsLogIn] = useState(false);
  const [isOtpValid, setIsOtpValid] = useState(false);

  function logInHandler() {
    setIsLogIn(true);
  }

  function logOutHandler() {
    setIsLogIn(false);
  }

  function otpHandler() {
    setIsOtpValid(true);
  }

  function uncheckOtp() {
    setIsOtpValid(false);
  }

  return (
    <View style={styles.container}>
    {!isOtpValid && <OtpPage checkOtp={otpHandler}/>}
    {isOtpValid && (
      <>
        {isLogIn ? <Profile onLogOut={logOutHandler} /> : <RegistraionPage onLogIn={logInHandler} uncheckOtp={uncheckOtp}/>}
      </>
    )}
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});
