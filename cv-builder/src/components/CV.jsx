import { useState } from 'react'
import CvHeader from './cvHeader'
import PersonalInput from './personalInput'
import CvEducation from './CvEducation'

export default function CV(){
    const [personalDetails, setPersonalDetails] = useState({
        name: 'Callum',
        email: 'callumacourtt@gmail.com',
        contact: '+44 123 456 789',
        location: 'London'
    })

    const updatePersonalDetails = (e) => {
        const {name, value} = e.target
        setPersonalDetails({ ...personalDetails, [name]: value })
    }

    const [schools, setSchools] = useState([
        {
            name: "Cardiff Uni",
            degree: "Computer Science",
            startYear: 2024,
            endYear: 2028,
            location: "Cardiff"
    }
])

    return (
    <>
    
    <CvHeader 
    personalDetails = {personalDetails}/>

    <CvEducation schools = {schools} />

    <PersonalInput 
    personalDetails = {personalDetails} 
    updatePersonalDetails = {updatePersonalDetails}
    />
    </>
    )
}