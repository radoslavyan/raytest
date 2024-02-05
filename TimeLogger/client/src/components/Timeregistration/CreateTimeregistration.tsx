import React, { useEffect, useState } from 'react';
import * as timeregistrationEndpoints from "../../endpoints/TimeregistrationEndpoints";
import * as projectEndpoints from "../../endpoints/ProjectEndpoints";

interface CreateTimeregistrationProps {
    onTimeregistrationCreated: () => void;
}

export default function CreateTimeregistration({ onTimeregistrationCreated }: CreateTimeregistrationProps) {

    const [isFormValid, setIsFormValid] = useState(false);
    const [projectCompleted, setProjectCompleted] = useState(false);


    const [timeregistration, setTimeregistration] = useState({
        projectId: undefined,
        startTime: '',
        endTime: '',
        timeSpentInHours: '',
        errors: {
            duration: '',
            invalidDateRange: ''
        }
    });

    useEffect(() => {
        const fetchProjectDetails = async () => {
            if (timeregistration.projectId) {
                try {
                    const project = await projectEndpoints.getById(timeregistration.projectId);
                    console.log("Fetched project details:", project); // Confirm the structure includes isCompletedStatus
                    setProjectCompleted(!!project.isCompletedStatus); // Use !! to ensure a boolean value
                } catch (error) {
                    console.error("Failed to fetch project details", error);
                    setProjectCompleted(false); 
                }
            }
        };
    
        fetchProjectDetails();
    }, [timeregistration.projectId]);
    
    console.log("Project completed status:", projectCompleted); // Debugging log Check here

    useEffect(() => {
        // Add projectCompleted to the condition to ensure form validation considers project completion status
        if ((timeregistration.startTime && timeregistration.endTime) && !projectCompleted) {
            const start = new Date(timeregistration.startTime);
            const end = new Date(timeregistration.endTime);
            const diff = end.getTime() - start.getTime(); // Difference in milliseconds
            const minutes = diff / (1000 * 60); // Convert milliseconds to minutes
    
            if (start >= end) {
                // Set error message for invalid date range
                setIsFormValid(false);
                setTimeregistration(prevState => ({
                    ...prevState,
                    errors: { ...prevState.errors, invalidDateRange: 'End time must be after start time.' }
                }));
            } else if (minutes < 30) {
                // Set error message for duration less than 30 minutes
                setIsFormValid(false);
                setTimeregistration(prevState => ({
                    ...prevState,
                    errors: { ...prevState.errors, duration: 'Time registration must be 30 minutes or longer.' }
                }));
            } else {
                // Clear errors and update time spent if all conditions are met
                setIsFormValid(true);
                const hours = diff / (1000 * 60 * 60); // Convert milliseconds to hours
                setTimeregistration(prevState => ({
                    ...prevState,
                    timeSpentInHours: hours.toFixed(2), // Keep two decimal places
                    errors: { ...prevState.errors, duration: '', invalidDateRange: '' }
                }));
            }
        } else if (projectCompleted) {
            // If the project is completed, ensure the form is marked as invalid
            setIsFormValid(false);
           
            setTimeregistration(prevState => ({
                ...prevState,
                errors: { ...prevState.errors, invalidDateRange: 'Cannot log time on a completed project.' }
            }));
        }
    }, [timeregistration.startTime, timeregistration.endTime, projectCompleted]); 
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!timeregistration) {
            console.error("Timeregistration data is undefined.");
            return;
        }

        if (!timeregistration.startTime) {
            console.error("Start time must be provided.");
            return;
        }

        if (!timeregistration.endTime) {
            console.error("End time must be provided.");
            return;
        }

        try {
            await timeregistrationEndpoints.createTimeregistration(timeregistration);
            onTimeregistrationCreated();
        } catch (error) {
            console.error("Failed to create timeregistration", error);
        }
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTimeregistration(current => ({
            ...current,
            [name]: name === 'projectId' ? parseInt(value, 10) || undefined : value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="projectId"
                type="number"
                value={timeregistration?.projectId || ''}
                onChange={handleChange}
                placeholder="Project Id"
            />
            <input
                name="startTime"
                type="datetime-local"
                value={timeregistration?.startTime || ''}
                onChange={handleChange}
                placeholder="Start Time"
            />
            <input
                name="endTime"
                type="datetime-local"
                value={timeregistration?.endTime || ''}
                onChange={handleChange}
                placeholder="End Time"
            />
            <input
                name="timeSpentInHours"
                type="number"
                value={timeregistration?.timeSpentInHours || ''}
                onChange={handleChange}
                placeholder="Time Spent In Hours"
            />
            {timeregistration.errors.duration && <div className="error">{timeregistration.errors.duration}</div>}
            {timeregistration.errors.invalidDateRange && <div className="error">{timeregistration.errors.invalidDateRange}</div>}
            {projectCompleted && <div className="error">This project is completed and cannot receive new time registrations.</div>}

            <button type="submit" disabled={!isFormValid || projectCompleted}>Create Timeregistration</button>

        </form>
    );
}
