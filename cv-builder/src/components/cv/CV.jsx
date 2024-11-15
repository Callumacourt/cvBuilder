import { useState } from 'react';
import CvHeader from './CvHeader';
import CvEducation from './CvEducation';
import CvExperience from './CvExperience'
import Input from '../input/input';

export default function CV() {
    const [personalDetails, setPersonalDetails] = useState({
        name: 'Callum',
        email: 'callumacourtt@gmail.com',
        contact: '+44 123 456 789',
        location: 'London'
    });
    
    const [showEducation, setShowEducation] = useState(false);
    const [showExperience, setShowExperience] = useState(false);

    const [editState, setEditState] = useState({
        editing: false,
        type: "",
        index: "",
        beforeEdit: ""
    })

    const deleteEle = (indexToRemove, setList) => {
        setList(prevList => prevList.filter((_, index) => index !== indexToRemove));
      };
    
    const [schools, setSchools] = useState([
        {
            name: "Cardiff Uni",
            degree: "Computer Science",
            startYear: 2024,
            endYear: 2028,
            location: "Cardiff"
        }
    ]);

    const [jobs, setJobs] = useState([
        {
            companyName: "Google",
            title: "Junior Developer",
            description: "Coding and stuff",
            startYear: 2004, 
            endYear: 2024
        }
    ])

    return (
        <>
            <div className="cv">
                <CvHeader personalDetails={personalDetails} />
                <CvEducation 
                    schools={schools} 
                    setEditState = {setEditState}
                    setShowEducation={setShowEducation} 
                    deleteEle = {deleteEle}
                    setSchools = {setSchools}
                />
                <CvExperience jobs={jobs}
                 setShowExperience={setShowExperience}
                 setEditState={setEditState}
                 deleteEle={deleteEle}
                 setJobs = {setJobs}/>
            </div>
            <Input
                personalDetails={personalDetails}
                setPersonalDetails={setPersonalDetails}
                schools={schools}
                setSchools={setSchools}
                jobs={jobs}
                setJobs={setJobs}
                showEducation={showEducation}
                setShowEducation={setShowEducation}
                editState = {editState}
                setEditState = {setEditState}
                showExperience = {showExperience}
                setShowExperience = {setShowExperience}
            />
        </>
    );
}
