import React, { useState } from "react";
import IndexProjects from "../components/Project/IndexProjects";
import CreateProject from "../components/Project/CreateProject";
import Button from "../utils/Button";
import IndexTimeregistrations from "../components/Timeregistration/IndexTimeregistrations";
import CreateTimeristraion from "../components/Timeregistration/CreateTimeregistration";

export default function TimeloggerHomePage() {

    const [showCreateProject, setShowCreateProject] = useState(false);
    const [showCreateTimeregistraion, setShowCreateTimeregistraion] = useState(false);
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending
    const toggleSortOrder = () => {
        setSortOrder(currentSortOrder => currentSortOrder === 'asc' ? 'desc' : 'asc');
    };
    const handleAddProject = () => {
        setShowCreateProject(true);
    };
    const handleAddTimeregistration = () => {
        setShowCreateTimeregistraion(true);
    }

    return (
        <>
            <div className="timelogger-home-page">

                <div className="w-1/2">
                    <Button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
                        onClick={() => handleAddProject()}> Add Project
                    </Button>

                </div>
                {showCreateProject && <CreateProject onProjectCreated={function (): void {
                    setShowCreateProject(false);
                }} />}

                <div className="w-1/2">
                    <Button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
                        onClick={() => handleAddTimeregistration()}> Add Timeregistration
                    </Button>
                </div>
                {showCreateTimeregistraion && <CreateTimeristraion onTimeregistrationCreated={function (): void {
                    setShowCreateTimeregistraion(false);
                }} />}
                
            </div>
            <div className="projects-table-container">
                <h1>Projects Table</h1> 
                <IndexProjects sortOrder={sortOrder as "asc" | "desc"} onToggleSortOrder={toggleSortOrder} />
            </div>
            <div className="timeregistrations-table-container">
                <h1>Timeregistrations Table</h1>
                <IndexTimeregistrations />
            </div>
        </>
    );
}
