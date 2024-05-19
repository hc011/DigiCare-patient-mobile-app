import { ip } from '../assets/IPAdress';

export const getDoctors = async (hospital_id) => {
    const api_url = `http://${ip}:8000/hospital/list-doctors/${hospital_id}`;

    try {
        const response = await fetch(api_url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();

        if (response.status != 200) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error; 
    }
}
