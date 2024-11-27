import React, { useState } from "react";
import PersonalInput from "./PersonalInput";
import CreateForm from "./Form";

export default function Input({
    personalDetails,
    setPersonalDetails,
    schools,
    setSchools,
    jobs,
    setJobs
}) {
    const [activeList, setActiveList] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [editState, setEditState] = useState({ type: null, index: null });

    const updatePersonalDetails = (e) => {
        const { name, value } = e.target;
        setPersonalDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleEdit = (e) => {
        const { name, value } = e.target;
        const updateList = activeList === "schools" ? setSchools : setJobs;
        
        updateList(prevList => 
            prevList.map((item, index) => 
                index === editState.index 
                    ? { ...item, [name]: value } 
                    : item
            )
        );
    };

    const clearCv = () => {
        setPersonalDetails({
            name: "",
            email: "",
            contact: "",
            location: "",
        });
        setSchools([]);
        setJobs([]);
        setActiveList(null);
        setShowForm(false);
    };

    const handleSectionClick = (type) => {
        setActiveList(prevType => prevType === type ? null : type);
        setShowForm(false);
    };

    const handleAddClick = () => {
        setShowForm(true);
        setEditState({ type: null, index: null });
    };

    const deleteEle = (type, indexToRemove) => {
        if (type === "schools") {
            setSchools(prevList => prevList.filter((_, index) => index !== indexToRemove));
        } else if (type === "jobs") {
            setJobs(prevList => prevList.filter((_, index) => index !== indexToRemove));
        }
    };

    const renderList = (items, type) => (
        <>
            <ul>
                {items.map((item, index) => (
                    <li 
                        key={index} 
                        onClick={() => {
                            setEditState({ type, index });
                            setShowForm(true);
                        }}
                    >
                        {type === "schools" ? item.name : item.companyName}
                        <button 
                            className="delete"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent triggering edit when deleting
                                deleteEle(type, index);
                            }} 
                            >Delete
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={handleAddClick}>Add {type === "schools" ? "School" : "Job"}</button>
        </>
    );

    return (
        <div className="input">
            <button onClick={clearCv}>Clear CV</button>
            
            <PersonalInput
                personalDetails={personalDetails}
                updatePersonalDetails={updatePersonalDetails}
            />

            <div 
                onClick={() => handleSectionClick("schools")}
                className={`section-header ${activeList === "schools" ? "active" : ""}`}
            >
                Education
            </div>
            {activeList === "schools" && renderList(schools, "schools")}

            <div 
                onClick={() => handleSectionClick("jobs")}
                className={`section-header ${activeList === "jobs" ? "active" : ""}`}
            >
                Experience
            </div>
            {activeList === "jobs" && renderList(jobs, "jobs")}

            {showForm && (
                <CreateForm
                    handling={activeList === "schools" ? "School" : "Job"}
                    list={activeList === "schools" ? schools : jobs}
                    setList={activeList === "schools" ? setSchools : setJobs}
                    formData={editState.index !== null 
                        ? (activeList === "schools" 
                            ? schools[editState.index] 
                            : jobs[editState.index]) 
                        : {}
                    }
                    editState={editState}
                    setEditState={setEditState}
                    handleEdit={handleEdit}
                    setShowForm={setShowForm}
                />
            )}
        </div>
    );
}