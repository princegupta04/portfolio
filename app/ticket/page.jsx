"use client";

import { useState } from "react";

export default function TicketForm() {
    const [formData, setFormData] = useState({
        issue_summary: "",
        issue_details: "",
        issue_priority: "Normal",
        myfile: null
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        console.log("📂 Selected File:", file.name, "Type:", file.type);

        if (!["image/png", "image/jpeg"].includes(file.type)) {
            setError("Invalid file type. Only JPG and PNG are allowed.");
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setFormData((prev) => ({
                ...prev,
                myfile: {
                    name: file.name,
                    base64: reader.result.split(",")[1],
                    mimeType: file.type
                }
            }));
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        console.log("🔹 Form Data Before Submission:", formData);

        try {
            const response = await fetch('/api/ticket', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            console.log("🌍 API Response Status:", response.status);

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            const result = await response.json();
            console.log("✅ API Response Data:", result);

            if (result.success) {
                setSuccess(`Ticket created successfully! ID: ${result.ticket_id}`);
            } else {
                throw new Error(result.error || "Failed to create ticket.");
            }
        } catch (error) {
            console.error("❌ Submission Error:", error.message);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-6 mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Raise an Issue</h2>

            {error && <p className="text-red-500 text-center">{error}</p>}
            {success && <p className="text-green-500 text-center">{success}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium">Issue Summary:</label>
                    <input 
                        type="text" 
                        name="issue_summary" 
                        onChange={handleChange} 
                        required 
                        className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500" 
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Issue Details:</label>
                    <textarea 
                        name="issue_details" 
                        onChange={handleChange} 
                        required 
                        className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500" 
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Priority:</label>
                    <select 
                        name="issue_priority" 
                        onChange={handleChange} 
                        className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="1">Normal</option>
                        <option value="2">High</option>
                        <option value="3">Urgent</option>
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Attachment:</label>
                    <input 
                        type="file" 
                        accept="image/png, image/jpeg" 
                        onChange={handleFileChange} 
                        className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500" 
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}
