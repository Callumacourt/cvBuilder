import { useState } from "react"
import { useEffect } from "react";

export default function ExperienceInput({
    showExperience, 
    setShowExperience, 
    formData: initialFormData = {},
    handleEdit,
    editState,
}){

    const [formData, setFormData] = useState(initialFormData)

    useEffect(() => {
        if (editState.editing) {
            setFormData(initialFormData);
        }
    }, [initialFormData, editState.editing]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (editState.editing == true) {
            handleEdit(e); 
        }
    };

    return (
        <div>
            <button onClick={() => {
                console.log({showExperience})
        
            setShowExperience(true)
            console.log({showExperience})
            }}>Add Experience</button>
            {showExperience && (
                <div className="experienceInput">
                    <form >
                        <label htmlFor="companyName">
                            Company Name
                            <input type="text"
                             name="companyName" 
                             value={formData.companyName}
                             onChange={handleChange}
                             />
                             <br />
                        </label>
                        <label htmlFor="title">
                            Job Title
                            <input type="text"
                             name="title" 
                             value={formData.title}
                             onChange={handleChange}
                             />
                             <br />
                        </label>
                        <label htmlFor="description">
                            Job Description
                            <input type="text"
                             name="description" 
                             value={formData.description}
                             onChange={handleChange}
                             />
                             <br />
                        </label>
                        <label htmlFor="startYear">
                            Start year: 
                            <input type="number"
                             name="startYear" 
                             value={formData.startYear}
                             onChange={handleChange}
                             />
                             <br />
                        </label>
                        <label htmlFor="endYear">
                            End year: 
                            <input type="number"
                             name="endYear" 
                             value={formData.endYear}
                             onChange={handleChange}
                             />
                             <br />
                        </label>
                    </form>
                </div>
            )}
        </div>
    )
}