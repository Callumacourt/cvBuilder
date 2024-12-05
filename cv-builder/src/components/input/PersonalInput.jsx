export default function PersonalInput({ personalDetails, updatePersonalDetails }) {
    return (
      <div className="personalDetails">
        <h3>Personal Details</h3>
        <label htmlFor="name">Full name</label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="given-name"
          value={personalDetails.name}  
          onChange={updatePersonalDetails}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          autoComplete="given-email"
          value={personalDetails.email}  
          onChange={updatePersonalDetails}
        />
        <label htmlFor="contact">Phone number</label>
        <input
          type="text"
          name="contact"
          id="contact"
          value={personalDetails.contact} 
          onChange={updatePersonalDetails}
        />
        <label htmlFor="location"><span>Address</span></label>
        <input
          type="text"
          name="location"
          id="location"
          value={personalDetails.location} 
          onChange={updatePersonalDetails}
        />
      </div>
    );
  }
  