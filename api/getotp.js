import {ip} from '../assets/IPAdress';

const api_url = "http://"+ip+":8000/userdata/getotp/";

export const getotp = async(props) => {
    try{
    const response = await fetch(api_url, {
        signal: props.signal, // Pass the AbortController's signal to the fetch request
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Specify that the request body is JSON-formatted
        },
        body: JSON.stringify({ // Convert the JavaScript object to a JSON string
            phone_number: props.mobileNumber
        })
        });
        return response;
    } catch (error) {
        console.error('API call failed', error);
        throw error;
    }

}