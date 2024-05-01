import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import store from './storage/store';
import OtpPage from './Screens/otp-page/OtpPage'
import Profile from './Screens/profile-page/Profile';
import DetailedProfile from './Screens/profile-detailed-page/DetailedProfile'
import RegistrationPage from './Screens/registration-page/RegistrationPage'
import DoctorPage from './Screens/profile-detailed-page/DoctorPage'
import tokenPage from './Screens/token-status-page/tokenStatus'
import BookingPage from './Screens/booking-page/BookingPage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function NavigationStack() {
  return (
  <Stack.Navigator >
    <Stack.Screen name="Login" component={OtpPage} options={{headerTitleAlign: 'center', headerStyle: {backgroundColor: "#5B8DD3"}}}></Stack.Screen>
    <Stack.Screen name="Profile" component={Profile} options={{headerTitleAlign: 'center', headerLeft: () => null, headerStyle: {backgroundColor: "#5B8DD3"}}}></Stack.Screen>
    <Stack.Screen name="Registration" component={RegistrationPage} options={{headerTitleAlign: 'center', headerStyle: {backgroundColor: "#5B8DD3"}}}></Stack.Screen>
    <Stack.Screen name="Book Appointment" component={BookingPage} options={{headerTitleAlign: 'center', headerStyle: {backgroundColor: "#5B8DD3"}}}></Stack.Screen>
    <Stack.Screen name = "Clinic" component={DoctorPage}options={{headerTitleAlign: 'center', headerStyle: {backgroundColor: "#5B8DD3"}}}></Stack.Screen>
    <Stack.Screen name = "Token Status" component={tokenPage}options={{headerTitleAlign: 'center', headerStyle: {backgroundColor: "#5B8DD3"}}}></Stack.Screen>
  </Stack.Navigator>
  )
}

export default function App() {

  return (

    // <View style={styles.container}>
    // {/* {console.log(`isotpvalid=${isOtpValid}`)} */}
    
    // {/* {!isOtpValid && <OtpPage checkOtp={otpHandler} uncheckOtp={uncheckOtp} login={logInHandler}/>}
    // {isOtpValid && (
    //   <>
    //     {isLogIn ? <Profile onLogOut={logOutHandler} uncheckOtp={uncheckOtp} /> : <RegistraionPage onLogIn={logInHandler} uncheckOtp={uncheckOtp}/>}
    //   </>
    // )} */}
    
    // {/* <Profile /> */}
    
    // </View>
    <Provider store={store}>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});
