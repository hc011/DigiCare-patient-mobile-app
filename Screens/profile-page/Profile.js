import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Image,
  ScrollView 
} from 'react-native';
import Header from '../../Components/Header';
import SearchBar from '../../Components/SearchBar';
import ClinicCard from '../../Components/ClinicCard';

const cardData = [
  { id: 1, clinicName: 'Maharaja raj bahadur clinic', clinicTiming: '10:00 AM - 8:00 PM', clinicRate: '250 Rs', clinicRating:'3.5' },
  { id: 2, clinicName: 'Maharaja raj bahadur clinic', clinicTiming: '10:00 AM - 8:00 PM', clinicRate: '250 Rs', clinicRating:'3.5' },
  { id: 3, clinicName: 'Maharaja raj bahadur clinic', clinicTiming: '10:00 AM - 8:00 PM', clinicRate: '250 Rs', clinicRating:'3.5' },
  { id: 4, clinicName: 'Maharaja raj bahadur clinic', clinicTiming: '10:00 AM - 8:00 PM', clinicRate: '250 Rs', clinicRating:'3.5' },
  { id: 5, clinicName: 'Maharaja raj bahadur clinic', clinicTiming: '10:00 AM - 8:00 PM', clinicRate: '250 Rs', clinicRating:'3.5' },
  { id: 6, clinicName: 'Maharaja raj bahadur clinic', clinicTiming: '10:00 AM - 8:00 PM', clinicRate: '250 Rs', clinicRating:'3.5' },
  { id: 7, clinicName: 'Maharaja raj bahadur clinic', clinicTiming: '10:00 AM - 8:00 PM', clinicRate: '250 Rs', clinicRating:'3.5' },
  { id: 8, clinicName: 'Maharaja raj bahadur clinic', clinicTiming: '10:00 AM - 8:00 PM', clinicRate: '250 Rs', clinicRating:'3.5' },
  { id: 9, clinicName: 'Maharaja raj bahadur clinic', clinicTiming: '10:00 AM - 8:00 PM', clinicRate: '250 Rs', clinicRating:'3.5' },
  { id: 10, clinicName: 'Maharaja raj bahadur clinic', clinicTiming: '10:00 AM - 8:00 PM', clinicRate: '250 Rs', clinicRating:'3.5' },

];

const Profile = (props) => {

    function logoutHandler() {
      props.onLogOut();
      props.uncheckOtp();
    }

    return (
      <View style={{flex:1}}>
        <Header />
        <TouchableOpacity style={styles.bookButton} onPress={logoutHandler}>
            <Text style={{color:'white', fontSize:10}}>Log Out</Text> 
          </TouchableOpacity>
        <SearchBar>Search doctor... </SearchBar>
        <View style={styles.listFade}></View>
        <ScrollView>
        <View style={styles.container}>
          <ClinicCard clinicName='Maharaja raj bahadur clinic' clinicTiming='10:00 AM - 8:00 PM' clinicRate='100 Rs' clinicRating='3.5' />
          
          {cardData.map((item) => (
          <ClinicCard
            key={item.id} // Always use a unique key when mapping over an array to render a list of components
            clinicName={item.clinicName}
            clinicTiming={item.clinicTiming}
            clinicRate={item.clinicRate}
            clinicRating={item.clinicRating}
          />
          ))}
        </View>
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        marginTop:20,
        marginBottom:20,
        alignItems:'center',
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
      }
})

export default Profile;