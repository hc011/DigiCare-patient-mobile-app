import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import OtpPage from './Screens/otp-page/OtpPage'
import Profile from './Screens/profile-page/Profile';
import RegistrationPage from './Screens/registration-page/RegistrationPage';
import Header from './Components/Header';
import DetailedProfile from './Screens/profile-detailed-page/DetailedProfile'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function NavigationStack() {
  return (
  <Stack.Navigator 
    screenOptions={({ navigation, route }) => ({
      header: ({ navigation, route, options }) => {
        const title = options.headerTitle !== undefined ? options.headerTitle : options.title !== undefined ? options.title : route.name;
        let rc = null;

        if(route.name === 'Profile') {
          console.log('here');

        }
        
        return (
          <Header 
            title={title}
            rc={rc} 
          />
        );
      },
    })}
  >

    <Stack.Screen name="OtpPage" component={OtpPage} ></Stack.Screen>
    <Stack.Screen name="Profile" component={Profile} ></Stack.Screen>
    <Stack.Screen name="Registration" component={RegistrationPage} ></Stack.Screen>
    <Stack.Screen name="Clinic" component={DetailedProfile} ></Stack.Screen>
  </Stack.Navigator>
  )
}


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

    // <View style={styles.container}>
    // {/* {console.log(`isotpvalid=${isOtpValid}`)} */}
    
    // {/* {!isOtpValid && <OtpPage checkOtp={otpHandler} uncheckOtp={uncheckOtp} login={logInHandler}/>}
    // {isOtpValid && (
    //   <>
    //     {isLogIn ? <Profile onLogOut={logOutHandler} uncheckOtp={uncheckOtp} /> : <RegistraionPage onLogIn={logInHandler} uncheckOtp={uncheckOtp}/>}
    //   </>
    // )} */}
    
    // <Profile />
    
    // </View>

    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});
