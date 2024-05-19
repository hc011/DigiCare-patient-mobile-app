import {ip} from '../assets/IPAdress';

const api_url = "http://"+ip+":8000/queue/update-queue/";

export const update = async({event, cabinId, appointment_id}) => {
    try{
    const response = await fetch(api_url, {
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          appointment_id: appointment_id,
          event: event,
          cabinId: cabinId
        }),
      });
        const res = await response.json();
        return res.position;
    } catch (error) {
        console.error('API call failed', error);
        throw error;
    }

}