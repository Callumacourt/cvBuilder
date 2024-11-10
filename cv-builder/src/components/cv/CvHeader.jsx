export default function CvHeader({personalDetails}){
    return (
      <div className="header">
        <h3>{personalDetails.name}</h3>
        <p>{personalDetails.email}</p>
        <p>{personalDetails.contact}</p>
        <p>{personalDetails.location}</p>
      </div>
    )
}