import { useState } from 'react'
import CvHeader from './cvHeader'
import PersonalInput from './personalInput'

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

    return (
    <>
    
    <CvHeader 
    personalDetails = {personalDetails}/>

    <PersonalInput 
    personalDetails = {personalDetails} 
    updatePersonalDetails = {updatePersonalDetails}
    />
    </>
    )
}