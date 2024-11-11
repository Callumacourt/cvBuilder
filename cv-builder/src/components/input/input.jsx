import EducationInput from "./EducationInput";
import PersonalInput from "./PersonalInput";


export default function Input({
    personalDetails,
    setPersonalDetails,
    schools,
    setSchools,
    showEducation,
    setShowEducation,
    editState,
    setEditState
}) {
    const updatePersonalDetails = (e) => {
        const { name, value } = e.target;
        setPersonalDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleEdit = (event) => {
        const { name, value } = event.target;  
    
        setSchools((prevSchools) => {
            const updatedSchools = [...prevSchools];
            updatedSchools[editState.index] = { 
                ...updatedSchools[editState.index], 
                [name]: value  
            };
            return updatedSchools;
        });
    };
    
    const cancelEdit = () => {
        setSchools((prevSchools) => {
            const updatedSchools = [...prevSchools];
            updatedSchools[editState.index] = { 
                ...updatedSchools[editState.index] = editState.beforeEdit,  
            };
            return updatedSchools;
        });
    }

    const handleSubmit = (event, formData) => {
        event.preventDefault();
        setSchools((prevSchools) => {
            const updatedSchools = [...prevSchools];
            if (editState.editing) {
                updatedSchools[editState.index] = { ...updatedSchools[editState.index], ...formData };
            } else {
                updatedSchools.push(formData);
            }
            return updatedSchools;
        });
        setShowEducation(false);
        setEditState((prevState) => ({
            ...prevState,
            editing: true
        }))
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
                editState = {editState}
                setEditState = {setEditState}
                showEducation={showEducation} 
                formData={schools[editState.index] || {}} 
                handleSubmit={handleSubmit} 
                setShowEducation={setShowEducation}
            />
        </div>
    )

}