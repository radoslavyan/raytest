import axios from 'axios';
import { TimeregistrationDto } from '../components/Timeregistration/timeregistration.model';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const urlTimeregistrations = `${BASE_URL}/timeregistrations`;

export async function getAll() {
    try {
        const response = await axios.get(`${urlTimeregistrations}`);
        console.log('Fetched timeregistrations:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching timeregistrations:', error);
        throw error;
    }
}

export async function getById(id: number) {
    try {
        const response = await axios.get(`${urlTimeregistrations}/${id}`);
        console.log(`Fetched timeregistration with ID ${id}:`, response.data);
        return response.data;
    } catch (error) {
        console.error(`Error fetching timeregistration with ID ${id}:`, error);
        throw error;
    }
}

export async function createTimeregistration(timeregistration: TimeregistrationDto) {
    try {
        const response = await axios.post(`${urlTimeregistrations}`, timeregistration);
        console.log('Created timeregistration:', response.data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // The request was made and the server responded with a status code
            if (error.response) {
                console.error('Error creating timeregistration, server responded with:', error.response.data);
                console.error('Status code:', error.response.status);
                console.error('Headers:', error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Error creating timeregistration, no response received:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error setting up timeregistration request:', error.message);
            }
        } else {
            // Non-Axios error
            console.error('Error creating timeregistration:', error);
        }
        throw error;
    }
}

export async function updateTimeregistraion(timeregistraion: TimeregistrationDto) {
    try {
        const response = await axios.put(`${urlTimeregistrations}/${timeregistraion.projectId}`, timeregistraion);
        console.log('Updated timeregistraion:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating timeregistraion:', error);
        throw error;
    }
}

export async function removeTimeregistraion(id: number) {
    try {
        const response = await axios.delete(`${urlTimeregistrations}/${id}`);
        console.log(`Deleted timeregistraion with ID ${id}:`, response.data);
        return response.data;
    } catch (error) {
        console.error(`Error deleting timeregistraion with ID ${id}:`, error);
        throw error;
    }
}
