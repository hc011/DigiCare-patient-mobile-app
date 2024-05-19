import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    ScrollView, 
    Pressable,
  } from 'react-native';
  import { useState, useEffect } from 'react';
  
  import { useDispatch } from 'react-redux';
  import { useSelector } from 'react-redux';
  
  import SearchBar from '../../Components/SearchBar';
  import ClinicCard from '../../Components/ClinicCard';
  
  import { getDoctors } from '../../api/getDoctors';
  import { setSelectedDoctorSlice } from '../../storage/selectedDoctorSlice';

  
  const DoctorList = (props) => {
    const dispatch = useDispatch();
    const selectedHospital = useSelector(state => state.hospital.selectedHospital)
    const [doctorList, setDoctorList] = useState([]);
  
    useEffect(() => {
      async function fetchDoctors() {
        try {
            const result = await getDoctors(selectedHospital.registration_id);
            setDoctorList(result); 
        } catch (error) {
            console.error("Failed to fetch doctors:", error);
        }
    }

    fetchDoctors();
    }, []);
  
    const [pressedIndex, setPressedIndex] = useState(null); 
  
    const pressHandler = (doctor) => {
      dispatch(setSelectedDoctorSlice(doctor));
      props.navigation.navigate('Doctor Details');
    }
  
      return (
        <View style={{flex:1}}>
  
          <SearchBar>Search doctor... </SearchBar>
          <View style={styles.listFade}></View>
  
          <ScrollView>
          <View style={styles.container}>
            {doctorList.map((doctor, index) => (
            <Pressable
              onPress={() =>pressHandler(doctor)}  
              key={index} 
              onPressIn={()=>setPressedIndex(index)}
              onPressOut={()=>setPressedIndex(null)}
              style={[{
                marginTop:20,
                justifyContent:'center'
              },
                (pressedIndex === index) ? styles.buttonPressed: {},
              ]}
              >
                <ClinicCard
                  key={doctor.id} 
                  clinicName={doctor.name}
                  clinicTiming={'10 am to 8 pm'}
                  // clinicRate={hospital.clinicRate}
                  clinicRating={doctor.rating}
                  clinicAddress={doctor.email}
                />
              </Pressable>
            ))}
          </View>
          </ScrollView>

        </View>
      )
  }
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          alignItems: 'center',
          paddingBottom:80,
        },
        bookButton: {
          height: 30,
          width:60,
          borderRadius:35,
          borderWidth:0.5,
          borderColor:'black',
          backgroundColor:'#0f5cc6',
          justifyContent:'center',
          alignItems:'center',
          marginTop:-50,
          alignSelf:'flex-end',
          marginRight:5,
          marginBottom:40
        },
        person: {
          borderRadius:40,
          borderColor:'red',
          width:40,
          height:40,
          alignItems:'center',
          justifyContent: 'center',
          alignSelf:'flex-end',
          margin:5,
          marginTop:-55,
          marginRight:10,
        },
        listFade: {
          borderWidth:0.5,
          width:'100%', 
          borderColor:'grey',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 8
        },
        buttonPressed : {
          transform: [{ scale: 0.98 }],
        },
        floatingButton: {
          position: 'absolute',
          bottom: 20,
          right: 20,
          backgroundColor: '#3498db',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 20,
          elevation: 2,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
      },
      buttonText: {
          color: '#ffffff',
          fontSize: 16,
      }
  })
  
  export default DoctorList;