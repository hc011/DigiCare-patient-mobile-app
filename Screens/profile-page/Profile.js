import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import SearchBar from '../../Components/SearchBar';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const Profile = ({ navigation }) => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SearchBar>Search for doctors & hospitals</SearchBar>

      {/* First row of tiles */}
      <View style={styles.tileContainer}>
        <Pressable style={styles.tile} onPress={() => navigation.navigate('Hospital List')}>
          <Icon name="local-hospital" size={40} color="#4CAF50" style={styles.icon} />
          <Text style={styles.tileText}>Hospitals</Text>
        </Pressable>
        
        <Pressable style={styles.tile} onPress={() => navigation.navigate('Doctor List')}>
          <Icon name="person-search" size={40} color="#FF5722" style={styles.icon} />
          <Text style={styles.tileText}>Doctors</Text>
        </Pressable>
      </View>

      {/* Second row of tiles */}
      <View style={styles.tileContainer}>
        <Pressable style={styles.tile} onPress={() => navigation.navigate('Reports')}>
          <Icon name="description" size={40} color="#3F51B5" style={styles.icon} />
          <Text style={styles.tileText}>My Reports</Text>
        </Pressable>

        <Pressable style={styles.tile} onPress={() => navigation.navigate('Medicines')}>
          <Icon name="local-pharmacy" size={40} color="#009688" style={styles.icon} />
          <Text style={styles.tileText}>Medicines</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F4F4F4', 
  },
  tileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  tile: {
    backgroundColor: 'white',
    width: '45%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 10,
  },
  icon: {
    marginBottom: 8,
  },
  tileText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  }
});

export default Profile;
