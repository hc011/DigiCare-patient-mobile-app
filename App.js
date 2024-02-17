import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import OtpPage from './Screens/otp-page/OtpPage'
import Profile from './Screens/profile-page/Profile';
import RegistraionPage from './Screens/registration-page/RegistrationPage';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';

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

  console.log(`islogin=${isLogIn}`);

  return (
    <View style={styles.container}>
    {console.log(`isotpvalid=${isOtpValid}`)}
    
    {!isOtpValid && <OtpPage checkOtp={otpHandler} uncheckOtp={uncheckOtp} login={logInHandler}/>}
    {isOtpValid && (
      <>
        {isLogIn ? <Profile onLogOut={logOutHandler} uncheckOtp={uncheckOtp} /> : <RegistraionPage onLogIn={logInHandler} uncheckOtp={uncheckOtp}/>}
      </>
    )}
    {/* <Profile /> */}
    

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});
