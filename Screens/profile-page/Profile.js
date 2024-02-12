import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Image, 
} from 'react-native';
import Header from '../../Components/Header';
import HTML from 'react-native-render-html'


const Profile = (props) => {
    const doctorInfo= `<p><b>Name: </b>Dr. Alex Martin \n <b>Designation: </b>Surgeon</p>`;

    function logoutHandler() {
      props.onLogOut();
      props.uncheckOtp();
    }

    return (
    <View style={styles.container}>
      {/* <StatusBar /> */}
      <Header />
      
      <Text style={{fontWeight:'bold', fontSize:26, marginTop:-50}}>Profile</Text>

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

          <HTML source={{html: doctorInfo}} contentWidth={200} />

        </View>
        </View>

      </View>

      <TouchableOpacity style={styles.bookButton} onPress={logoutHandler}>
        <Text style={{color:'white', fontSize:25}}>Log Out</Text> 
      </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop:-95,
        // paddingTop: Platform.OS == 'android'? StatusBar.currentHeight:0
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