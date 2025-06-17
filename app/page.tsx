"use client";

import { useState } from "react";
import studentsData from "@/data/students.json";
import StudentForm from "@/components/StudentForm";
import StudentList from "@/components/StudentList";
import { Student } from "../types";

export default function Home() {
  const [students, setStudents] = useState<Student[]>(studentsData);

  const addStudent = (newStudent: Omit<Student, "id">) => {
    setStudents([...students, { ...newStudent, id: Date.now().toString() }]);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        New Generation High School – Student Portal
      </h1>
      <StudentForm onAddStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
}