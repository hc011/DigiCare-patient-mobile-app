import {ip} from '../assets/IPAdress';

const api_url = `http://${ip}:8000/userdata/login/`;

export const login = async (props) => {
  try {
    const response = await fetch(api_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phone_number: props.mobileNumber,
        otp: props.otp,
      }),
    });

    console.log('response', response.status)
    
    const responseData = await response.json();
    return {
      status: response.status,
      data: responseData
    };
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    throw error;
  }
};
