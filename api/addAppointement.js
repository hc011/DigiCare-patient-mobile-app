import {ip} from '../assets/IPAdress';

const api_url = "http://"+ip+":8000/queue/add-appointment/";

export const addAppointment = async({name, sex, age, contact, reason, paid, appointment_time, user, cabinId }) => {

    try{
    const response = await fetch(api_url, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            cabinId: cabinId,
            patient_name: name,
            gender: sex,
            add_appointment:null,
            age : parseInt(age),
            paid : paid,
            disease : reason,
            appointment_time: appointment_time
        }),
      });
        let res = await response.json();

        return [response, res.appointment_id, res.position];

    } catch (error) {
        console.error('API call failed', error);
        throw error;
    }

}