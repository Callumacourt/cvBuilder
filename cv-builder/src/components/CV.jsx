import { useState } from 'react';
import CvHeader from './CvHeader';
import PersonalInput from './PersonalInput';
import CvEducation from './CvEducation';
import EducationInput from './EducationInput';

export default function CV() {
    const [personalDetails, setPersonalDetails] = useState({
        name: 'Callum',
        email: 'callumacourtt@gmail.com',
        contact: '+44 123 456 789',
        location: 'London'
    });

    const updatePersonalDetails = (e) => {
        const { name, value } = e.target;
        setPersonalDetails({ ...personalDetails, [name]: value });
    };
    

    const [showEducation, setShowEducation] = useState(false);
    const [editing, setEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(0);
    const [schools, setSchools] = useState([
        {
            name: "Cardiff Uni",
            degree: "Computer Science",
            startYear: 2024,
            endYear: 2028,
            location: "Cardiff"
        }
    ]);

    const addSchool = (formData) => {
        setSchools([
            ...schools,
            {
                name: formData.name,
                degree: formData.degree,
                startYear:formData.startYear,
                endYear: formData.endYear,
                location: formData.location
            }
        ]);
    };

    const editSchool = (field, value) => {
        const updatedSchools = [...schools];
        updatedSchools[editingIndex] = { ...updatedSchools[editingIndex], [field]: value };
        setSchools(updatedSchools);
    };


    const updateFormData = (field, value) => {
        if (editing) {
            setSchools((prevSchools) => {
                const updatedSchools = [...prevSchools];
                updatedSchools[editingIndex] = { ...updatedSchools[editingIndex], [field]: value };
                return updatedSchools;
            });
        }
    };


    const handleSubmit = (event, formData) => {
        event.preventDefault();
        if(!editing){
            addSchool(formData)
        }
        setShowEducation(false);
        setEditing(false);
    };

    return (
        <>
            <CvHeader personalDetails={personalDetails} />
            <CvEducation 
                schools={schools} 
                setEditing={setEditing} 
                setEditingIndex={setEditingIndex} 
                setShowEducation={setShowEducation} 
            />
            <PersonalInput 
                personalDetails={personalDetails} 
                updatePersonalDetails={updatePersonalDetails} 
            />
            <EducationInput 
                updateFormData={updateFormData}
                setEditing={setEditing}
                editing={editing} 
                showEducation={showEducation} 
                formData={schools[editingIndex]} 
                editSchool={editSchool} 
                handleSubmit={handleSubmit} 
                addSchool={addSchool}
                setShowEducation={setShowEducation}
            />
        </>
    );
}
