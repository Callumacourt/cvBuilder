export default function PersonalInput({ personalDetails, updatePersonalDetails }) {
    return (
      <div>
        <input
          type="text"
          name="name"
          value={personalDetails.name}   // Controlled value
          onChange={updatePersonalDetails}
        />
  
        <input
          type="text"
          name="email"
          value={personalDetails.email}  // Controlled value
          onChange={updatePersonalDetails}
        />
  
        <input
          type="text"
          name="contact"
          value={personalDetails.contact} // Controlled value
          onChange={updatePersonalDetails}
        />
  
        <input
          type="text"
          name="location"
          value={personalDetails.location} // Controlled value
          onChange={updatePersonalDetails}
        />
      </div>
    );
  }
  