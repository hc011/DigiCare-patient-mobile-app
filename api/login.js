import {ip} from '../assets/IPAdress';

const api_url = "http://"+ip+":8000/userdata/login/";

export const login = async(props) => {
    try{
    const response = await fetch(api_url, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone_number: props.mobileNumber,
          otp: props.otp,
        }),
        });
        return response;
    } catch (error) {
        console.error('API call failed', error);
        throw error;
    }

}