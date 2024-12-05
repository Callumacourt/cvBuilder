import { useState } from 'react';
import CvHeader from './CvHeader';
import CvEducation from './CvEducation';
import CvExperience from './CvExperience'
import Input from '../input/input';
import {defaultPersonalDetails, defaultSchools, defaultJobs } from '../../data/defaultData';

export default function CV() {
    const [personalDetails, setPersonalDetails] = useState(defaultPersonalDetails);
    
    const [schools, setSchools] = useState(defaultSchools);

    const [jobs, setJobs] = useState(defaultJobs)

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
