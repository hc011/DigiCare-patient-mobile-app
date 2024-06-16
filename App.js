import "react-native-gesture-handler";
import React from "react";
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
import MyAppointments from "./Screens/my-appointments-page/MyAppointments";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import OtpVerification from "./Screens/otp-verification-page/OtpVerification";
import Icon from "react-native-vector-icons/MaterialIcons";
import MyReports from "./Screens/reports/MyReports";
import Medicines from "./Screens/medicines/Medicines";
import MyAccount from "./Screens/my-account/MyAccount";

const Stack = createStackNavigator();

function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="otpVerification"
        component={OtpVerification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={MyBottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registration"
        component={RegistrationPage}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5B8DD3" },
        }}
      />
      <Stack.Screen
        name="My Appointments"
        component={MyAppointments}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5B8DD3" },
        }}
      />
      <Stack.Screen
        name="Book Appointment"
        component={BookingPage}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5B8DD3" },
        }}
      />
      <Stack.Screen
        name="Hospital List"
        component={HospitalList}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5B8DD3" },
        }}
      />
      <Stack.Screen
        name="Hospital Details"
        component={HospitalDetails}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5B8DD3" },
        }}
      />
      <Stack.Screen
        name="Doctor List"
        component={DoctorList}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5B8DD3" },
        }}
      />
      <Stack.Screen
        name="Doctor Details"
        component={DoctorDetails}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5B8DD3" },
        }}
      />
      <Stack.Screen
        name="Token Status"
        component={tokenPage}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5B8DD3" },
        }}
      />
      <Stack.Screen
        name="My Reports"
        component={MyReports}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5B8DD3" },
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Medicines"
        component={Medicines}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5B8DD3" },
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Account"
        component={MyAccount}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5B8DD3" },
        }}
      ></Stack.Screen>
    </Stack.Navigator>
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
          paddingBottom: 20,
          borderRadius: 15,
        },
        tabBarItemStyle: {},
      }}
    >
      <Tab.Screen
        name="Home"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              size={30}
              color={focused ? "#5B8DD3" : "#808080"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={HospitalList}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="search"
              size={30}
              color={focused ? "#5B8DD3" : "#808080"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Appointments"
        component={MyAppointments}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="book"
              size={30}
              color={focused ? "#5B8DD3" : "#808080"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Account"
        component={MyAccount}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="person"
              size={30}
              color={focused ? "#5B8DD3" : "#808080"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor="" />
        <NavigationStack />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
