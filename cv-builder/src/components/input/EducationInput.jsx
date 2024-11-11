import { useState, useEffect } from 'react';

export default function EducationInput({ 
    setShowEducation, 
    showEducation, 
    formData: initialFormData = {}, 
    editState, 
    setEditState,
    handleSubmit, 
    handleEdit, 
    cancelEdit,
}) {
    const [formData, setFormData] = useState(initialFormData);

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

    const onSubmit = (e) => {
        handleSubmit(e, formData);
        setFormData({}); 
        setEditState((prevState) => ({
            ...prevState,
            editing: false
        }))
    };

    return (
        <div>
            <button onClick={() => {
                setEditState((prevState) => ({
                    ...prevState,
                    editing: false
                }))
                setFormData({}); 
                setShowEducation(true);
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
                        <input type="submit" value={editState.editing ? 'Save' : 'Add'} />
                        <input type="button" value={'Cancel'} onClick={() => {
                            if (editState.editing){
                                cancelEdit()
                            }
                            setShowEducation(false)
                            setFormData({})
                            setEditState((prevState) => ({
                                ...prevState,
                                editing: false
                            }))
                            }}/>

                    </form>
                </div>
            )}
        </div>
    );
}
