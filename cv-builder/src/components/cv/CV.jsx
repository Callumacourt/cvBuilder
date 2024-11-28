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
            position: "Junior Developer",
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
                />
                <CvExperience jobs={jobs}
                />
            </div>
            <Input
                personalDetails={personalDetails}
                setPersonalDetails={setPersonalDetails}
                schools={schools}
                setSchools={setSchools}
                jobs={jobs}
                setJobs={setJobs}
            />
        </>
    );
}
