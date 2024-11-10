import EducationInput from "./EducationInput";
import PersonalInput from "./PersonalInput";


export default function Input({
    personalDetails,
    setPersonalDetails,
    schools,
    setSchools,
    showEducation,
    setShowEducation,
    editing,
    setEditing,
    editingIndex,
    beforeEdit,
}) {
    const updatePersonalDetails = (e) => {
        const { name, value } = e.target;
        setPersonalDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleEdit = (event) => {
        const { name, value } = event.target;  
    
        setSchools((prevSchools) => {
            const updatedSchools = [...prevSchools];
            updatedSchools[editingIndex] = { 
                ...updatedSchools[editingIndex], 
                [name]: value  
            };
            return updatedSchools;
        });
    };
    
    const cancelEdit = () => {
        setSchools((prevSchools) => {
            const updatedSchools = [...prevSchools];
            updatedSchools[editingIndex] = { 
                ...updatedSchools[editingIndex] = beforeEdit,  
            };
            return updatedSchools;
        });
    }

    const handleSubmit = (event, formData) => {
        event.preventDefault();
        setSchools((prevSchools) => {
            const updatedSchools = [...prevSchools];
            if (editing) {
                updatedSchools[editingIndex] = { ...updatedSchools[editingIndex], ...formData };
            } else {
                updatedSchools.push(formData);
            }
            return updatedSchools;
        });
        setShowEducation(false);
        setEditing(false);
    };

    return (
        <div className="input">
          <PersonalInput 
                personalDetails={personalDetails} 
                updatePersonalDetails={updatePersonalDetails} 
            />
            <EducationInput 
            cancelEdit = {cancelEdit}
            handleEdit ={handleEdit}
                editing={editing} 
                showEducation={showEducation} 
                formData={schools[editingIndex] || {}} 
                handleSubmit={handleSubmit} 
                setShowEducation={setShowEducation}
                setEditing = {setEditing}
            />
        </div>
    )

}