import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ScrollView, 
  Pressable,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../../Components/Header';
import SearchBar from '../../Components/SearchBar';
import ClinicCard from '../../Components/ClinicCard';
import { useState } from 'react';

const cardData = [
  { id: 1, clinicName: 'Maharaja raj bahadur clinic', clinicTiming: '10:00 AM - 8:00 PM', clinicRate: '250 Rs', clinicRating:'3.5', address:'Address • x kms' },
  { id: 2, clinicName: 'Maharaja raj bahadur clinic', clinicTiming: '10:00 AM - 8:00 PM', clinicRate: '250 Rs', clinicRating:'3.5', address:'Address • x kms' },
  { id: 3, clinicName: 'Maharaja raj bahadur clinic', clinicTiming: '10:00 AM - 8:00 PM', clinicRate: '250 Rs', clinicRating:'3.5', address:'Address • x kms' },
  { id: 4, clinicName: 'Maharaja raj bahadur clinic', clinicTiming: '10:00 AM - 8:00 PM', clinicRate: '250 Rs', clinicRating:'3.5', address:'Address • x kms' },
  { id: 5, clinicName: 'Maharaja raj bahadur clinic', clinicTiming: '10:00 AM - 8:00 PM', clinicRate: '250 Rs', clinicRating:'3.5' , address:'Address • x kms'},
  { id: 6, clinicName: 'Maharaja raj bahadur clinic', clinicTiming: '10:00 AM - 8:00 PM', clinicRate: '250 Rs', clinicRating:'3.5', address:'Address • x kms' },
  { id: 7, clinicName: 'Maharaja raj bahadur clinic', clinicTiming: '10:00 AM - 8:00 PM', clinicRate: '250 Rs', clinicRating:'3.5' , address:'Address • x kms'},
  { id: 8, clinicName: 'Maharaja raj bahadur clinic', clinicTiming: '10:00 AM - 8:00 PM', clinicRate: '250 Rs', clinicRating:'3.5' , address:'Address • x kms'},
  { id: 9, clinicName: 'Maharaja raj bahadur clinic', clinicTiming: '10:00 AM - 8:00 PM', clinicRate: '250 Rs', clinicRating:'3.5', address:'Address • x kms' },
  { id: 10, clinicName: 'Maharaja raj bahadur clinic', clinicTiming: '10:00 AM - 8:00 PM', clinicRate: '250 Rs', clinicRating:'3.5' , address:'Address • x kms'},

];

const Profile = (props) => {

  const [pressedIndex, setPressedIndex] = useState(null); 

    // function logoutHandler() {
    //   props.onLogOut();
    //   props.uncheckOtp();
    // }

    return (
      <View style={{flex:1}}>
        <View style={styles.header}>
          <Header />
          {/* <TouchableOpacity style={styles.bookButton} onPress={logoutHandler}>
              <Text style={{color:'white', fontSize:10}}>Log Out</Text> 
            </TouchableOpacity> */} 
            <View  style={styles.person}>
              <Icon style={{marginLeft:-1, marginTop:-1.2}} name="person-circle" size={40} color="black" />
            </View>
        </View>

        <SearchBar>Search doctor... </SearchBar>
        <View style={styles.listFade}></View>

        <ScrollView>
        <View style={styles.container}>
          
          {cardData.map((item, index) => (
          <Pressable  
            key={index} 
            onPressIn={()=>setPressedIndex(index)}
            onPressOut={()=>setPressedIndex(null)}
            style={[{
              marginTop:20,
              // marginBottom:10,
              // height:100,
              justifyContent:'center'
            },
              (pressedIndex === index) ? styles.buttonPressed: {},
            ]}
            >
              <ClinicCard
                key={item.id} 
                clinicName={item.clinicName}
                clinicTiming={item.clinicTiming}
                clinicRate={item.clinicRate}
                clinicRating={item.clinicRating}
                clinicAddress={item.address}
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
        // marginTop:20,
        // marginBottom:20,
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
      header: {
        marginBottom:20,
        // borderWidth:1,
        // borderColor:'green'
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
      }
})

export default Profile;