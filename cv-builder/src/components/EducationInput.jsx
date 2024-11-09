export default function EducationInput({ showEducation, formData, editSchool, handleSubmit, addSchool }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        editSchool(name, value);
    };

    return (
        <div>
            <button onClick={addSchool}>Add School</button>

            {showEducation && (
                <div className="schoolInput">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="schoolName">
                            School Name:
                            <input type="text" name="name" value={formData.name} onChange={handleChange} />
                        </label>
                        <label htmlFor="degree">
                            Degree:
                            <input type="text" name="degree" value={formData.degree} onChange={handleChange} />
                        </label>
                        <label htmlFor="startYear">
                            Start Year:
                            <input type="number" name="startYear" value={formData.startYear} onChange={handleChange} />
                        </label>
                        <label htmlFor="endYear">
                            End Year:
                            <input type="number" name="endYear" value={formData.endYear} onChange={handleChange} />
                        </label>
                        <label htmlFor="location">
                            Location:
                            <input type="text" name="location" value={formData.location} onChange={handleChange} />
                        </label>
                        <input type="submit" value={formData.name ? 'Save' : 'Add'} />
                    </form>
                </div>
            )}
        </div>
    );
}
