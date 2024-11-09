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
        setPersonalDetails((prev) => ({ ...prev, [name]: value }));
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
        <>
            <div className="cv">
            <CvHeader personalDetails={personalDetails} />
            <CvEducation 
                schools={schools} 
                setEditing={setEditing} 
                setEditingIndex={setEditingIndex} 
                setShowEducation={setShowEducation} 
            />
            </div>
            <div className="input">
            <PersonalInput 
                personalDetails={personalDetails} 
                updatePersonalDetails={updatePersonalDetails} 
            />
            <EducationInput 
            handleEdit ={handleEdit}
                editing={editing} 
                showEducation={showEducation} 
                formData={schools[editingIndex] || {}} 
                handleSubmit={handleSubmit} 
                setShowEducation={setShowEducation}
                setEditing = {setEditing}
            />
            </div>
        </>
    );
}
