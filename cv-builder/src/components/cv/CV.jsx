import { useState } from 'react';
import CvHeader from './CvHeader';
import CvEducation from './CvEducation';
import Input from '../input/input';

export default function CV() {
    const [personalDetails, setPersonalDetails] = useState({
        name: 'Callum',
        email: 'callumacourtt@gmail.com',
        contact: '+44 123 456 789',
        location: 'London'
    });
    
    const [showEducation, setShowEducation] = useState(false);

    const [editState, setEditState] = useState({
        editing: false,
        type: "",
        index: 0,
        beforeEdit: ""
    })
    
    const [schools, setSchools] = useState([
        {
            name: "Cardiff Uni",
            degree: "Computer Science",
            startYear: 2024,
            endYear: 2028,
            location: "Cardiff"
        }
    ]);

    return (
        <>
            <div className="cv">
                <CvHeader personalDetails={personalDetails} />
                <CvEducation 
                    schools={schools} 
                    setEditState = {setEditState}
                    setShowEducation={setShowEducation} 
                />
            </div>
            <Input
                personalDetails={personalDetails}
                setPersonalDetails={setPersonalDetails}
                schools={schools}
                setSchools={setSchools}
                showEducation={showEducation}
                setShowEducation={setShowEducation}
                editState = {editState}
                setEditState = {setEditState}
            />
        </>
    );
}
