"use client";

import { useState } from "react";
import { Student } from "../types";

export default function StudentForm({ onAddStudent }: { onAddStudent: (student: Omit<Student, "id">) => void }) {
  const [formData, setFormData] = useState<Omit<Student, "id">>({
    firstName: "",
    lastName: "",
    dob: "",
    grade: "9",
  });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setError("First and last names are required.");
      return;
    }
    if (!formData.dob) {
      setError("Date of birth is required.");
      return;
    }
    if (parseInt(formData.grade) < 9 || parseInt(formData.grade) > 12) {
      setError("Grade must be between 9 and 12.");
      return;
    }

    onAddStudent(formData);
    setFormData({ firstName: "", lastName: "", dob: "", grade: "9" });
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow text-black">
      <h2 className="text-xl font-bold mb-4">Add New Student</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-2">First Name</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="w-full p-2 border rounded text-black"
            required
            placeholder="Enter first name"
          />
        </div>
        <div>
          <label className="block mb-2">Last Name</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="w-full p-2 border rounded text-black"
            required
            placeholder="Enter last name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-2">Date of Birth</label>
          <input
            type="date"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            className="w-full p-2 border rounded text-black"
            required
            placeholder="Enter date of birth"
          />
        </div>
        <div>
          <label htmlFor="grade" className="block mb-2">Grade</label>
          <select
            id="grade"
            value={formData.grade}
            onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
            className="w-full p-2 border rounded text-black"
            required
          >
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Student
      </button>
    </form>
  );
}