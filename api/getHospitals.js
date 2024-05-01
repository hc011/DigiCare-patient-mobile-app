import {ip} from '../assets/IPAdress';

const api_url = "http://"+ip+":8000/hospital/list-hospitals/";

export const getHospitals = async() => {
   return(  
   fetch(api_url)
        .then(response => {
            // Check if the request was successful
            if (response.ok) {
            return response.json(); // Parse the response body as JSON
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        })
    )
}