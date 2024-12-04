import React, { useState } from "react";
import PersonalInput from "./PersonalInput";
import Section from "./Section";
import {defaultPersonalDetails, defaultSchools, defaultJobs } from '../../data/defaultData';

export default function Input({
    personalDetails,
    setPersonalDetails,
    schools,
    setSchools,
    jobs,
    setJobs,
}) {
    const [editState, setEditState] = useState({ type: null, index: null, beforeEdit: null });

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

    const loadExample = () => {
        console.log(defaultPersonalDetails)
        setPersonalDetails(defaultPersonalDetails);
        setSchools(defaultSchools);
        setJobs(defaultJobs);
    }

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
                <button onClick={loadExample}>Load Example</button>
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
                handleEdit={handleEdit} 
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
