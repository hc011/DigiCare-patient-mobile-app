import { ip } from '../assets/IPAdress';

export const getCheckupCabin = async (doctor_id, hospital_id) => {
    const api_url = `http://${ip}:8000/hospital/checkupcabin/`;
    try {       
        const response = await fetch(api_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body :JSON.stringify( {
                doctorId : doctor_id,
                hospitalId: hospital_id
            })
        });
        const res = await response.json();
        return res;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error; 
    }
}
