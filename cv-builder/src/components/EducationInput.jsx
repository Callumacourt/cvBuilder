import { useState, useEffect } from 'react';

export default function EducationInput({ 
    setShowEducation, 
    showEducation, 
    formData: initialFormData = {}, 
    editing, 
    handleSubmit, 
    handleEdit, 
    setEditing
}) {
    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        setFormData(initialFormData);
    }, [initialFormData, editing]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (editing) {
            handleEdit(e); 
        }
    };

    const onSubmit = (e) => {
        handleSubmit(e, formData);
        setFormData({}); 
        editing = false
    };

    return (
        <div>
            <button onClick={() => {
                setShowEducation(true);
                setFormData({}); 
                setEditing(false)
            }}>
                Add School
            </button>

            {showEducation && (
                <div className="schoolInput">
                    <form onSubmit={onSubmit}>
                        <label htmlFor="schoolName">
                            School Name:
                            <input 
                                type="text" 
                                name="name" 
                                value={formData.name || ''} 
                                onChange={handleChange} 
                            />
                        </label>
                        <label htmlFor="degree">
                            Degree:
                            <input 
                                type="text" 
                                name="degree" 
                                value={formData.degree || ''} 
                                onChange={handleChange} 
                            />
                        </label>
                        <label htmlFor="startYear">
                            Start Year:
                            <input 
                                type="number" 
                                name="startYear" 
                                value={formData.startYear || ''} 
                                onChange={handleChange} 
                            />
                        </label>
                        <label htmlFor="endYear">
                            End Year:
                            <input 
                                type="number" 
                                name="endYear" 
                                value={formData.endYear || ''} 
                                onChange={handleChange} 
                            />
                        </label>
                        <label htmlFor="location">
                            Location:
                            <input 
                                type="text" 
                                name="location" 
                                value={formData.location || ''} 
                                onChange={handleChange} 
                            />
                        </label>
                        <input type="submit" value={editing ? 'Save' : 'Add'} />
                    </form>
                </div>
            )}
        </div>
    );
}
