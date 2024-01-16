import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Image, 
  useWindowDimensions, 
  SafeAreaView, 
  Platform,
  StatusBar
} from 'react-native';
import HTML from 'react-native-render-html'

const Profile = (props) => {
    const doctorInfo= `<p><b>Name: </b>Dr. Alex Martin \n <b>Designation: </b>Surgeon</p>`;
    const {width} = useWindowDimensions();

    return (
    <View style={styles.container}>
      <StatusBar />
      <View style={{alignItems:'center', backgroundColor:'#86B6F6' }} ><View style={{borderWidth:1, width:400}} /><Image style={styles.logo} source={require('../../assets/digitalCare__logo.jpg')}/><View style={{borderWidth:1, width:400}} /></View>
      
      <View style={{marginTop:-50}}><Text style={{fontWeight:'bold', fontSize:26}}>Profile</Text></View>

      <View style={styles.doctorCard}>
        <View style={styles.doctorDP}>
          <Image style={{height:'100%', width:'100%'}} source={require('../../assets/doctorDP__icon.jpg')} />
        </View>

        <View style={{alignItems:'center', justifyContent:'flex-end',marginBottom:40}}>
        <View style={styles.doctorDetails}>
          {/* <Text style={{fontSize:16}}>
            <Text style={{fontWeight:'bold'}}>Name: <Text style={{fontWeight:'normal'}}>Dr. Alex martin{"\n"}</Text></Text> 
            <Text style={{fontWeight:'bold'}}>Designation: <Text style={{fontWeight:'normal'}}>Surgeon</Text></Text> 
          </Text> */}
          <HTML source={{html: doctorInfo}} contentWidth={width}></HTML>
        </View>
        </View>

      </View>

      <TouchableOpacity style={styles.bookButton} onPress={props.onLogOut}>
        <Text style={{color:'white', fontSize:25}}>Log Out</Text> 
      </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop:-120,
        paddingTop: Platform.OS == 'android'? StatusBar.currentHeight:0
      },
      logo: {
        resizeMode:'contain',
        height:70,
        width:200,
        // margin:10,
        // borderWidth:1,
        
      },
    
      doctorCard: {
        height:350,
        width:250,
        padding:20,
        borderWidth:2,
        borderRadius:10,
        borderColor:'black',
        // marginBottom: 60,
        // marginTop:-60,
        alignItems:'center',
        justifyContent:'center',
      },
      doctorDP: { 
        height:150,
        width:150,
        // borderWidth:1,
        borderRadius:10,
        borderColor:'black',
        margin: 10,
        marginVertical:30,
        justifyContent:'center',
        alignItems:'center',
        // flex:1,
      },
    
      doctorDetails: {
        // borderWidth:1
        // flex:2
      },
      bookButton: {
        height: 60,
        width:110,
        borderRadius:35,
        borderWidth:2,
        borderColor:'black',
        backgroundColor:'#0f5cc6',
        justifyContent:'center',
        alignItems:'center',
        
      },
})

export default Profile;