import PersonalInput from "./PersonalInput";
import CreateForm from "./Form";

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

    const clearCv = () => {
        setPersonalDetails([])
        setSchools([]);
        setJobs([]);
    }

    return (
        <div className="input">
            <button onClick={clearCv}>Clear CV</button>
            <PersonalInput 
                personalDetails={personalDetails} 
                updatePersonalDetails={updatePersonalDetails} 
            />
            <CreateForm 
                handling = {'School'}
                list={schools} 
                setList = {setSchools}
                formData={{}} 
                editState={editState}
                setEditState={setEditState}
                showList={showEducation}
                setShowList={setShowEducation}
                handleEdit={handleEdit}
            />
            <CreateForm 
                handling = {'Job'}
                list={jobs} 
                setList={setJobs}
                formData={{}} 
                editState={editState}
                setEditState={setEditState}
                showList={showExperience}
                setShowList={setShowExperience}
                handleEdit={handleEdit}
            />
        </div>
    );
}
