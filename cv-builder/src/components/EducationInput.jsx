import { useState, useEffect } from 'react';

export default function EducationInput({ 
    setShowEducation, 
    showEducation, 
    formData: initialFormData = {}, 
    editing, 
    handleSubmit, 
    handleEdit, 
    cancelEdit,
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
                            <br />
                            <input 
                                type="text" 
                                name="name" 
                                value={formData.name || ''} 
                                onChange={handleChange} 
                            />
                            <br />
                        </label>
                        <label htmlFor="degree">
                            Degree:
                            <br />
                            <input 
                                type="text" 
                                name="degree" 
                                value={formData.degree || ''} 
                                onChange={handleChange} 
                            />
                            <br />
                        </label>
                        <label htmlFor="startYear">
                            Start Year:
                            <br />
                            <input 
                                type="number" 
                                name="startYear" 
                                value={formData.startYear || ''} 
                                onChange={handleChange} 
                            />
                            <br />
                        </label>
                        <label htmlFor="endYear">
                            End Year:
                            <br />
                            <input 
                                type="number" 
                                name="endYear" 
                                value={formData.endYear || ''} 
                                onChange={handleChange} 
                            />
                            <br />
                        </label>
                        <label htmlFor="location">
                            Location:
                            <br />
                            <input 
                                type="text" 
                                name="location" 
                                value={formData.location || ''} 
                                onChange={handleChange} 
                            />
                            <br />
                        </label>
                        <input type="submit" value={editing ? 'Save' : 'Add'} />
                        <input type="button" value={'Cancel'} onClick={() => {
                            cancelEdit()
                            setShowEducation(false)
                            setFormData({})
                            setEditing(false)
                            }}/>
                    </form>
                </div>
            )}
        </div>
    );
}
