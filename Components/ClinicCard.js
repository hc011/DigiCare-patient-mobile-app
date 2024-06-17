import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import fontSizes from "../constants/fontSizes";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// const iconMap = {
//     home: require('./assets/home-icon.png'),
//     settings: require('./assets/settings-icon.png'),
//     profile: require('./assets/profile-icon.png'),
//   };
// const iconSource = iconMap[props.type]; // Dynamically select based on props
// <Image source={iconSource} style={{ width: 100, height: 100 }} />;

const ClinicCard = (props) => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: "https://th.bing.com/th/id/OIP.S3W84fWYx6AH0WyjjIQjXgHaE8?rs=1&pid=ImgDetMain",
        }}
        style={styles.image}
      />
      <TouchableOpacity activeOpacity={1} style={styles.ratingContainer}>
        {/* <MaterialIcons name="star" size={18} color="#ffd000" /> */}
        <Text style={styles.ratingText}>
          <Text style={{ fontWeight: "600" }}>
            <Text>🌟</Text> {props.clinicRating}
          </Text>{" "}
          (2.3K reviews)
        </Text>
      </TouchableOpacity>
      <View style={styles.details}>
        <Text style={styles.name}>{props.clinicName}</Text>
        <Text style={styles.specialties}>{props.clinicSpecializations}</Text>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="location-on" size={15} color="gray" />
          <Text style={styles.address}>Clinic Address</Text>
        </View>
      </View>
    </View>

    //  <View style={styles.container}>
    //    <View style={styles.clinicPhoto}>
    //      <View style={styles.clinicPhotoContainer}>
    //        <Image
    //          style={{ height: "140%", width: "140%", marginTop: 5 }}
    //          source={require("../assets/doctorDP__icon.jpg")}
    //        />
    //      </View>
    //    </View>

    //    <View style={styles.clinicDetails}>
    //      <Text style={{ fontWeight: "bold", fontSize: 16 }}>
    //        {props.clinicName}
    //      </Text>
    //      <Text style={{ fontSize: 12 }}>{props.clinicTiming}</Text>
    //      <Text style={{ fontSize: 12 }}>{props.clinicAddress}</Text>
    //    </View>
    //    <View style={styles.clinicRating}>
    //      <View style={styles.clinicRatingPallete}>
    //        <Text style={{ color: "white", fontSize: 12 }}>
    //          {props.clinicRating}
    //        </Text>
    //      </View>
    //      <TouchableOpacity style={styles.icon}>
    //        <Icon name="phone" size={20} color="#000" />
    //      </TouchableOpacity>
    //      <TouchableOpacity style={styles.icon}>
    //        <Icon name="globe" size={20} color="#4444ff" />
    //      </TouchableOpacity>
    //    </View>
    //  </View>
  );
};

export default ClinicCard;

const styles = StyleSheet.create({
  //   container: {
  //     borderColor: "grey",
  //     borderRadius: 16,
  //     height: 150,
  //     width: "95%",
  //     flexDirection: "row",
  //     backgroundColor: "white",
  //     shadowColor: "#000",
  //     shadowOffset: {
  //       width: 0,
  //       height: 4,
  //     },
  //     shadowOpacity: 0.1,
  //     shadowRadius: 5,
  //     elevation: 5,
  //     marginVertical: 8,
  //   },
  //   clinicPhoto: {
  //     justifyContent: "center",
  //   },
  //   clinicPhotoContainer: {
  //     borderRadius: 15,
  //     height: "100%",
  //     width: 125,
  //     overflow: "hidden",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     //  borderWidth:1,
  //     flex: 1,
  //   },
  //   clinicDetails: {
  //     margin: 10,
  //     marginRight: 5,
  //     justifyContent: "space-evenly",
  //     //  borderWidth:1,
  //     flex: 6,
  //   },
  //   clinicRating: {
  //     marginVertical: 10,
  //     marginRight: 10,
  //     justifyContent: "space-evenly",
  //     alignItems: "center",
  //     //  borderWidth:1,
  //     flex: 1,
  //   },
  //   clinicRatingPallete: {
  //     height: 20,
  //     width: "100%",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     backgroundColor: "green",
  //     borderRadius: 5,
  //   },
  //   icon: {
  //     // padding:8
  //   },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignSelf: "center",
    width: "100%",
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  details: {
    padding: 20,
    marginTop: -40,
  },
  name: {
    fontSize: fontSizes.h5,
    fontWeight: "600",
  },
  specialties: {
    fontSize: fontSizes.caption,
    color: "#777",
    marginBottom: 5,
  },
  address: {
    fontSize: 12,
    color: "#aaa",
  },
  ratingContainer: {
    position: "relative",
    backgroundColor: "white",
    width: "fit-content",
    borderRadius: 30,
    alignSelf: "flex-end",
    bottom: 30,
    paddingHorizontal: 5,
    paddingVertical: 2,
    right: 10,
    height: "fit-content",
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    fontSize: 16,
    marginRight: 5,
  },
  ratingText: {
    fontSize: fontSizes.caption,
  },
});
