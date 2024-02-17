import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

// const iconMap = {
//     home: require('./assets/home-icon.png'),
//     settings: require('./assets/settings-icon.png'),
//     profile: require('./assets/profile-icon.png'),
//   };
// const iconSource = iconMap[props.type]; // Dynamically select based on props
// <Image source={iconSource} style={{ width: 100, height: 100 }} />;

const ClinicCard = (props) => {

 return (
   <View style={styles.container}>
    <View style={styles.clinicPhoto}>
        <View style={styles.clinicPhotoContainer}>
            <Image style={{height:'140%', width:'140%',marginTop:5}} source={require('../assets/doctorDP__icon.jpg')} />
        </View>
    </View>
    <View style={styles.clinicDetails}>
        <Text style={{fontWeight:'bold', fontSize:16}}>{props.clinicName}</Text>
        <Text style={{fontWeight:'bold',fontSize:16}}>{props.clinicTiming}</Text>
        <Text style={{fontWeight:'bold',fontSize:16}}>{props.clinicRate}</Text>
    </View>
    <View style={styles.clinicRating}>
        <View style={styles.clinicRatingPallete}>
            <Text style={{color:'white'}}>{props.clinicRating}</Text>
        </View>
        <TouchableOpacity style={styles.icon}>
                <Icon name="phone" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
                <Icon name="globe" size={20} color="#4444ff" />
        </TouchableOpacity>
    </View>

   </View>
 );
};

export default ClinicCard;

const styles = StyleSheet.create({
 container: {
    borderColor:'grey',
    borderRadius:15,
    borderWidth:1,
    height:100,
    width:"95%",
    margin:10,
    flexDirection:'row',
    backgroundColor:'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
 },
 clinicPhoto: {
    flex:1,
    justifyContent:'center',
    marginLeft:10
 },
 clinicPhotoContainer: {
    borderColor:'grey',
    borderRadius:8,
    borderWidth:1,
    height:80,
    width:80,
    overflow:'hidden',
    justifyContent:'center',
    alignItems:'center'
 },
 clinicDetails:{
    flex:2.5,
    margin:10,
    marginLeft:5,
    marginRight:5,
    justifyContent:'space-evenly'
    // borderWidth:1
 },
 clinicRating: {
    flex:0.5,
    alignItems:'flex-start',
    // borderWidth:1,
    marginVertical:10,
    marginRight:10,
    justifyContent:'space-evenly',
    alignItems:'center'
 },
 icon: {
    
  },
 clinicRatingPallete: {
    height:20,
    width:"100%", 
    justifyContent:'center', 
    alignItems:'center', 
    backgroundColor:'green',
    borderRadius:5,
    // borderWidth:1,
    
 }
 
});

