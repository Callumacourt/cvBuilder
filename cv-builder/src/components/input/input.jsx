import React, { useState } from "react";
import PersonalInput from "./PersonalInput";
import Section from "./Section";

export default function Input({
    personalDetails,
    setPersonalDetails,
    schools,
    setSchools,
    jobs,
    setJobs,
}) {
    const [editState, setEditState] = useState({ type: null, index: null });

    const clearCv = () => {
        setPersonalDetails({
            name: "",
            email: "",
            contact: "",
            location: "",
        });
        setSchools([]);
        setJobs([]);
        setEditState({ type: null, index: null });
    };

    const handleEdit = (e) => {
        const { name, value } = e.target;
        const updateList = editState.type === "schools" ? setSchools : setJobs;

        updateList((prevList) =>
            prevList.map((item, index) =>
                index === editState.index ? { ...item, [name]: value } : item
            )
        );
    };

    return (
        <div className="input">
            <div className="cvManager">
                <button onClick={clearCv}>Clear CV</button>
                <button>Load Example</button>
            </div>

            <PersonalInput
                className="header"
                personalDetails={personalDetails}
                updatePersonalDetails={(e) =>
                    setPersonalDetails((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                    }))
                }
            />

            <Section
                title="Education"
                items={schools}
                setItems={setSchools}
                type="schools"
                editState={editState}
                setEditState={setEditState}
                handleEdit={handleEdit} // Pass live edit handler
            />

            <Section
                title="Experience"
                items={jobs}
                setItems={setJobs}
                type="jobs"
                editState={editState}
                setEditState={setEditState}
                handleEdit={handleEdit} 
            />
        </div>
    );
}
