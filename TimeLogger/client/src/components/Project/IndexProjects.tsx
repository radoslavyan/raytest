import React, { useEffect, useState } from "react";
import * as projectEndpoints from "../../endpoints/ProjectEndpoints";
import { ProjectDto } from "./projects.model"; // Ensure the file extension is correct (e.g., .model.ts or .model.tsx)

interface IndexProjectsProps {
  sortOrder: 'asc' | 'desc';
  onToggleSortOrder: () => void;
}

export default function IndexProjects({ sortOrder, onToggleSortOrder }: IndexProjectsProps) {

  const [projects, setProjects] = useState<ProjectDto[]>([]);

    useEffect(() => {
      projectEndpoints.getAll()
        .then(data => {
          const sortedData = data.sort((a: { deadline: string | number | Date; }, b: { deadline: string | number | Date; }) => {
            const dateA = new Date(a.deadline), dateB = new Date(b.deadline);
            const numericDateA = +dateA;
            const numericDateB = +dateB;
            return sortOrder === 'asc' ? numericDateA - numericDateB : numericDateB - numericDateA;
          });
          setProjects(sortedData);
        })
        .catch(error => console.error('Error fetching projects:', error));
    }, [sortOrder]);

  return (
    <>
      <button onClick={onToggleSortOrder}>Toggle Sort Order</button>

      <table className="table-fixed w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2 w-12">#Id</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Deadline</th>
            <th className="border px-4 py-2">Completed</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td className="border px-4 py-2 w-12">{project.id}</td>
              <td className="border px-4 py-2">{project.name}</td>
              <td className="border px-4 py-2">{project.description}</td>
              <td className="border px-4 py-2">{project.deadline}</td>
              <td className="border px-4 py-2">{project.isCompletedStatus?.toString() ?? ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
