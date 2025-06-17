"use client"; 
import { Student } from "../types";

export default function StudentCard({ student }: { student: Student }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border text-black shadow hover:shadow-lg transition-shadow duration-200">
      <h3 className="font-bold text-lg">
        {student.firstName} {student.lastName}
      </h3>
      <p>Date of Birth: {student.dob}</p>
      <p>Grade: {student.grade}</p>
    </div>
  );
}