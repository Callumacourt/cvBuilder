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
    const [editing, setEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(0);
    const [beforeEdit, setBeforeEdit] = useState("");
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
                    setEditing={setEditing} 
                    setEditingIndex={setEditingIndex} 
                    setShowEducation={setShowEducation} 
                    setBeforeEdit={setBeforeEdit}
                />
            </div>
            <Input
                personalDetails={personalDetails}
                setPersonalDetails={setPersonalDetails}
                schools={schools}
                setSchools={setSchools}
                showEducation={showEducation}
                setShowEducation={setShowEducation}
                editing={editing}
                setEditing={setEditing}
                editingIndex={editingIndex}
                beforeEdit={beforeEdit}
                setBeforeEdit={setBeforeEdit}
            />
        </>
    );
}
