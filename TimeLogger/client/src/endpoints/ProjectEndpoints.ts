import axios from 'axios';
import { ProjectDto } from '../components/Project/projects.model';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const urlProjects = `${BASE_URL}/projects`;

export async function getAll() {
    try {
        const response = await axios.get(`${urlProjects}`);
        console.log('Fetched projects:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
}

export async function getById(id: number) {
    try {
        const response = await axios.get(`${urlProjects}/${id}`);
        console.log(`Fetched project with ID ${id}:`, response.data);
        return response.data;
    } catch (error) {
        console.error(`Error fetching project with ID ${id}:`, error);
        throw error;
    }
}

export async function createProject(project: ProjectDto) {
    try {
        const response = await axios.post(`${urlProjects}`, project);
        console.log('Created project:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating project:', error);
        throw error;
    }
}

export async function updateProject(project: ProjectDto) {
    try {
        const response = await axios.put(`${urlProjects}/${project.id}`, project);
        console.log('Updated project:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating project:', error);
        throw error;
    }
}

export async function removeProject(id: number) {
    try {
        const response = await axios.delete(`${urlProjects}/${id}`);
        console.log(`Deleted project with ID ${id}:`, response.data);
        return response.data;
    } catch (error) {
        console.error(`Error deleting project with ID ${id}:`, error);
        throw error;
    }
}
