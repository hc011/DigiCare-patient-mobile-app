import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { setSelectedHospitalSlice } from "../../storage/selectedHospitalSlice";

import SearchBar from "../../Components/SearchBar";
import ClinicCard from "../../Components/ClinicCard";

import { getHospitals } from "../../api/getHospitals";

const HospitalList = (props) => {
  const dispatch = useDispatch();
  const [hospitalList, setHospitalList] = useState([]);

  useEffect(() => {
    getHospitals().then((data) => {
      setHospitalList(data);
    });
  }, []);

  const [pressedIndex, setPressedIndex] = useState(null);

  const pressHandler = (hospital) => {
    dispatch(setSelectedHospitalSlice(hospital));
    props.navigation.navigate("Hospital Details");
  };

  const handleCheckStatus = () => {
    props.navigation.navigate("Token Status");
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <SearchBar>Search for hospital </SearchBar>

      {/* <View style={styles.listFade}></View> */}

      <ScrollView>
        <View style={styles.container}>
          {hospitalList.map((hospital, index) => (
            <Pressable
              onPress={() => pressHandler(hospital)}
              key={index}
              onPressIn={() => setPressedIndex(index)}
              onPressOut={() => setPressedIndex(null)}
              style={[
                {
                  marginTop: 20,
                  justifyContent: "center",
                },
                pressedIndex === index ? styles.buttonPressed : {},
              ]}
            >
              <ClinicCard
                key={hospital.id}
                clinicName={hospital.hospital_name}
                clinicTiming={"10 am to 8 pm"}
                // clinicRate={hospital.clinicRate}
                clinicSpecializations={hospital.specializations}
                clinicRating={hospital.rating}
                clinicPhone={hospital.phone_number}
              />
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={handleCheckStatus}
      >
        <Text style={styles.buttonText}>Check Status</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    padding: 10,
  },
  bookButton: {
    height: 30,
    width: 60,
    borderRadius: 35,
    borderWidth: 0.5,
    borderColor: "black",
    backgroundColor: "#0f5cc6",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -50,
    alignSelf: "flex-end",
    marginRight: 5,
    marginBottom: 40,
  },
  person: {
    borderRadius: 40,
    borderColor: "red",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    margin: 5,
    marginTop: -55,
    marginRight: 10,
  },
  listFade: {
    borderWidth: 0.5,
    width: "100%",
    borderColor: "grey",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
  },
  buttonPressed: {
    transform: [{ scale: 0.98 }],
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#3498db",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});

export default HospitalList;
