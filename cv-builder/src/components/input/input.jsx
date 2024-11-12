import EducationInput from "./EducationInput";
import PersonalInput from "./PersonalInput";
import ExperienceInput from "./ExperienceInput";

export default function Input({
    personalDetails,
    setPersonalDetails,
    schools,
    setSchools,
    showEducation,
    setShowEducation,
    editState,
    setEditState,
    showExperience,
    setShowExperience,
    jobs,              
    setJobs
}) {
    const updatePersonalDetails = (e) => {
        const { name, value } = e.target;
        setPersonalDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleEdit = (event) => {
        const { name, value } = event.target;

        const updateList = (list, setList) => {
            setList((prevList) => {
                const updatedList = [...prevList];
                updatedList[editState.index] = {
                    ...updatedList[editState.index],
                    [name]: value
                };
                return updatedList;
            });
        };

        if (editState.type === 'school') {
            updateList(schools, setSchools);
        } else if (editState.type === 'job') {
            updateList(jobs, setJobs);
        }
    };

    const cancelEdit = () => {

          const cancelListEdit = (list, setList) => {
          setList((prevList) => {
            const updatedList = [...prevList];
            updatedList[editState.index] = editState.beforeEdit;
            return updatedList;
          })
          }
          
        if (editState.type === 'school') {
            cancelListEdit(schools,setSchools)
        } else if (editState.type === 'job') {
            cancelListEdit(jobs, setJobs)
        }
    };

    const handleSubmit = (event, formData) => {
        event.preventDefault();
        setSchools((prevSchools) => {
            const updatedSchools = [...prevSchools];
            if (editState.type === 'school' && editState.editing) {
                updatedSchools[editState.index] = { ...updatedSchools[editState.index], ...formData };
            } else if (editState.type === 'school') {
                updatedSchools.push(formData);
            }
            return updatedSchools;
        });
        setShowEducation(false);
        setEditState((prevState) => ({
            ...prevState,
            editing: true
        }));
    };

    return (
        <div className="input">
            <PersonalInput 
                personalDetails={personalDetails} 
                updatePersonalDetails={updatePersonalDetails} 
            />
            <EducationInput 
                cancelEdit={cancelEdit}
                handleEdit={handleEdit}
                editState={editState}
                setEditState={setEditState}
                showEducation={showEducation} 
                formData={schools[editState.index] || {}} 
                handleSubmit={handleSubmit} 
                setShowEducation={setShowEducation}
            />
            <ExperienceInput
                showExperience={showExperience}
                setShowExperience={setShowExperience}
                handleEdit={handleEdit}
                editState={editState}
            />
        </div>
    );
}
