import {ip} from '../assets/IPAdress';

const base_url = "http://"+ip+":8000/queue/current-position/";

export const getPosition = async(appointment_id) => {
    const api_url = `${base_url}${appointment_id}`;
    try{
    const response = await fetch(api_url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
        const res = await response.json();
        return res.current_position;
    } catch (error) {
        console.error('API call failed', error);
        throw error;
    }
}