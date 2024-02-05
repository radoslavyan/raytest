import React, { useEffect, useState } from "react";
import * as projectEndpoints from "../../endpoints/ProjectEndpoints";

interface CreateProjectProps {
    onProjectCreated: () => void;
}

const initialProjectState = {
    name: '',
    description: '',
    deadline: '',
    isCompletedStatus: false,
};

export default function CreateProject({ onProjectCreated }: CreateProjectProps) {
    const [project, setProject] = useState(initialProjectState);
    const [autoCompleted, setAutoCompleted] = useState(false);

    useEffect(() => {
        const todayStr = new Date().toISOString().split('T')[0];
        if (project.deadline) {
            const deadlineDate = new Date(project.deadline);

            // Check if the deadlineDate is valid before proceeding
            if (!isNaN(deadlineDate.getTime())) {
                const formattedDeadline = deadlineDate.toISOString().split('T')[0];

                if (formattedDeadline <= todayStr) {
                    setProject(prevProject => ({
                        ...prevProject,
                        isCompletedStatus: true,
                    }));
                    setAutoCompleted(true); // Indicate that the completion was automatically set
                } else if (formattedDeadline > todayStr && autoCompleted) {
                    // Optionally reset autoCompleted if you are tracking manual overrides
                    setAutoCompleted(false);
                }
            } else {
                console.error("Invalid deadline date:", project.deadline);
            }
        }
    }, [project.deadline, autoCompleted]);


    const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
        const { name, value, type, checked } = e.target;
        setProject(prevProject => ({
            ...prevProject,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            await projectEndpoints.createProject(project);
            onProjectCreated();
            setProject(initialProjectState);
        } catch (error) {
            console.error("Failed to create project", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={project.name}
                onChange={handleChange}
                placeholder="Project Name"
            />
            <input
                type="text"
                name="description"
                value={project.description}
                onChange={handleChange}
                placeholder="Description"
            />
            <input
                type="date"
                name="deadline"
                value={project.deadline}
                onChange={handleChange}
                placeholder="Deadline"
            />
            <label>
                Completed:
                <input
                    type="checkbox"
                    name="isCompletedStatus" // Ensure the 'name' matches the state property
                    checked={project.isCompletedStatus}
                    onChange={handleChange} />
            </label>
            <button type="submit">Create Project</button>
        </form>
    );
}
