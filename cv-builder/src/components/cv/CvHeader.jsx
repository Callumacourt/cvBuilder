import emailIcon from '../../assets/mail.svg';
import phoneIcon from '../../assets/phone.svg'
import locationIcon from '../../assets/map-pin.svg'


export default function CvHeader({personalDetails}){
    return (
      <div className="header">
        <div className="name"><h3>{personalDetails.name}</h3></div>
        <div className="contactInfo">
        <div> <img src={emailIcon} alt="img" /> <span>{personalDetails.email}</span></div>
        <div> <img src={phoneIcon} alt="" /><span>{personalDetails.contact}</span></div>
        <div> <img src={locationIcon} alt="" />{personalDetails.location}</div>
        </div>
      </div>
    )
}