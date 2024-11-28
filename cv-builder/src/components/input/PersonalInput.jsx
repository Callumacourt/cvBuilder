export default function PersonalInput({ personalDetails, updatePersonalDetails }) {
    return (
      <div className="personalDetails">
        <h3>Personal Details</h3>
        <label htmlFor="name">Full name</label>
        <input
          type="text"
          name="name"
          value={personalDetails.name}  
          onChange={updatePersonalDetails}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={personalDetails.email}  
          onChange={updatePersonalDetails}
        />
        <label htmlFor="contact">Phone number</label>
        <input
          type="text"
          name="contact"
          value={personalDetails.contact} 
          onChange={updatePersonalDetails}
        />
        <label htmlFor="location"><span>Address</span></label>
        <input
          type="text"
          name="location"
          value={personalDetails.location} 
          onChange={updatePersonalDetails}
        />
      </div>
    );
  }
  