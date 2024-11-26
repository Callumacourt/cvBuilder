import { useState, useEffect } from "react";

export default function CreateForm({
  handling,
  formData: initialFormData = {},
  list = [],
  setList,
  editState,
  setEditState,
  setShowForm,
  handleEdit
}) {
  const [formData, setFormData] = useState(initialFormData);
  const [formState, setFormState] = useState(
    handling === "School" 
      ? ["name", "degree", "location", "startYear", "endYear"]
      : ["companyName", "position", "description", "startYear", "endYear"]
  );

  useEffect(() => {
    // If editing an existing entry, populate the form
    if (editState.index !== null) {
      setFormData(list[editState.index]);
    } else {
      // Reset form for new entry
      setFormData({});
    }
  }, [editState, list]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name)
    console.log(formData[name])
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    
    // Only call handleEdit if in edit mode
    if (editState.index !== null) {
      handleEdit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setList((prevList) => {
      const updatedList = [...prevList];
      
      if (editState.index !== null) {
        // Editing existing entry
        updatedList[editState.index] = formData;
      } else {
        // Adding new entry
        updatedList.push(formData);
      }
      
      return updatedList;
    });

    // Reset form and close
    setFormData({});
    setShowForm(false);
    setEditState({ type: null, index: null });
  };

  return (
    <form onSubmit={handleSubmit}>
      {formState.map((key) => (
        <div key={key}>
          <label htmlFor={key}>
            {key.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase() })}:
          </label>
          <input
            name={key}
            value={formData[key] || ""}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">
        {editState.index !== null ? "Save Changes" : `Add ${handling}`}
      </button>
      <button type="button" onClick={() => setShowForm(false)}>
        Cancel
      </button>
    </form>
  );
}