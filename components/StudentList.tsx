"use client";

import StudentCard from "./StudentCard";
import { Student } from "../types";

export default function StudentList({ students }: { students: Student[] }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow text-black">
      <h2 className="text-2xl font-bold mb-4 text-black">Student List</h2>
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <div className="space-y-4">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      )}
    </div>
  );
}