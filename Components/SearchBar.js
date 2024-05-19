import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={props.children}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity style={styles.icon}>
        <Icon name="search" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom:20,
    width:"100%"
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize:16
  },
  icon: {
    padding: 10,
  },
});

