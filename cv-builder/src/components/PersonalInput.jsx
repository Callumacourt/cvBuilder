export default function PersonalInput({ personalDetails, updatePersonalDetails }) {
    return (
      <div>
        <input
          type="text"
          name="name"
          value={personalDetails.name}  
          onChange={updatePersonalDetails}
        />
  
        <input
          type="text"
          name="email"
          value={personalDetails.email}  
          onChange={updatePersonalDetails}
        />
  
        <input
          type="text"
          name="contact"
          value={personalDetails.contact} 
          onChange={updatePersonalDetails}
        />
  
        <input
          type="text"
          name="location"
          value={personalDetails.location} 
          onChange={updatePersonalDetails}
        />
      </div>
    );
  }
  