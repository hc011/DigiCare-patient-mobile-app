import { View, StyleSheet, Image, StatusBar, Platform } from 'react-native';

const Header = () => {
  return (
  <View style={styles.container} >
    <View style={{borderWidth:1, width:400}} />
      <Image style={styles.logo} source={require('../assets/digitalCare__logo.jpg')}/>
    <View style={{borderWidth:1, width:400}} />
  </View>
 );
};

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        backgroundColor:'#86B6F6',
        marginTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    logo: {
        resizeMode:'contain',
        height:70,
        width:200,
        },
});

export default Header;
