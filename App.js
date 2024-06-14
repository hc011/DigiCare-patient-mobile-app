import "react-native-gesture-handler";
import { StyleSheet, View, Text, Button } from "react-native";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";

import store from "./storage/store";
import SignIn from "./Screens/signin-page/SignIn";
import Profile from "./Screens/profile-page/Profile";
import RegistrationPage from "./Screens/registration-page/RegistrationPage";
import DoctorList from "./Screens/doctors/DoctorList";
import DoctorDetails from "./Screens/doctors/DoctorDetails";
import HospitalList from "./Screens/hospitals/HospitalList";
import HospitalDetails from "./Screens/hospitals/HospitalDetails";
import tokenPage from "./Screens/token-status-page/tokenStatus";
import BookingPage from "./Screens/booking-page/BookingPage";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Otp from "./Screens/otp-verification-page/OtpVerification";

const Stack = createStackNavigator();

function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={SignIn}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Profile"
        component={MyBottomTabNavigator}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Registration"
        component={RegistrationPage}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5B8DD3" },
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Book Appointment"
        component={BookingPage}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5B8DD3" },
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Hospital List"
        component={HospitalList}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5B8DD3" },
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Hospital Details"
        component={HospitalDetails}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5B8DD3" },
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Doctor List"
        component={DoctorList}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5B8DD3" },
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Doctor Details"
        component={DoctorDetails}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5B8DD3" },
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Token Status"
        component={tokenPage}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5B8DD3" },
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
function Account() {
  return (
    <View styles={{ flex: 1 }}>
      <Button title="LogOut"></Button>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyBottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "" },
        tabBarStyle: {
          height: "10%",
        },
        tabBarItemStyle: {},
      }}
    >
      <Tab.Screen name="User Profile" component={Profile} />
      {/* <Tab.Screen name="Profile2" component={HospitalList} /> */}
      {/* <Tab.Screen name="Profile3" component={tokenPage} /> */}
      <Tab.Screen name="My Account" component={Account} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      {/* {console.log(`isotpvalid=${isOtpValid}`)} */}

      {/* {!isOtpValid && <OtpPage checkOtp={otpHandler} uncheckOtp={uncheckOtp} login={logInHandler}/>}
    {isOtpValid && (
      <>
        {isLogIn ? <Profile onLogOut={logOutHandler} uncheckOtp={uncheckOtp} /> : <RegistraionPage onLogIn={logInHandler} uncheckOtp={uncheckOtp}/>}
      </>
    )} */}

      <Otp />
    </View>
    // <Provider store={store}>
    //   <NavigationContainer>
    //     <StatusBar backgroundColor="" />
    //     <NavigationStack />
    //   </NavigationContainer>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
