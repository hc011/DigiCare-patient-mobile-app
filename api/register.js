import {ip} from '../assets/IPAdress';

const api_url = "http://"+ip+":8000/userdata/register/";

export const register = async(props) => {
    try{
    const response = await fetch(api_url, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone_number: props.mobileNumber,
          first_name: props.firstName,
          last_name: props.lastName,
          dob: props.DOB,
          email: props.email,
          password: props.password
        }),
      });
        return response;
    } catch (error) {
        console.error('API call failed', error);
        throw error;
    }

}