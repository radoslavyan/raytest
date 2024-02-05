import React, { useEffect, useState } from "react";
import * as timeregistrationEndpoints from "../../endpoints/TimeregistrationEndpoints";
import { TimeregistrationDto } from "./timeregistration.model";

export default function IndexTimeregistrations() {
    const [timeregistration, setTimeregistraion] = useState<TimeregistrationDto[]>([]);

    useEffect(() => {

        const fetchTimeregistraions = () => {
            timeregistrationEndpoints.getAll()
                .then(data => setTimeregistraion(data))
                .catch(error => console.error('Error fetching timeregistraions:', error));
        };

        fetchTimeregistraions();
    }, []);

    return (
        <table className="table-fixed w-full">
            <thead className="bg-gray-200">
                <tr>
                    <th className="border px-4 py-2">ProjectId</th>
                    <th className="border px-4 py-2">StartTime</th>
                    <th className="border px-4 py-2">EndTime</th>
                    <th className="border px-4 py-2">TimeSpentInHours</th>
                </tr>
            </thead>
            <tbody>
                {timeregistration.map((timeregistration) => (
                    <tr key={timeregistration.id}>
                        <td className="border px-4 py-2 w-12">{timeregistration.projectId}</td>
                        <td className="border px-4 py-2">{timeregistration.startTime}</td>
                        <td className="border px-4 py-2">{timeregistration.endTime}</td>
                        <td className="border px-4 py-2">{timeregistration.timeSpentInHours}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
