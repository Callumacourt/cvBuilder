import { useState, useEffect } from "react";

export default function CreateForm({
  handling,
  formData: initialFormData = {},
  list = [],
  setList,
  editState,
  setEditState,
  showList, 
  setShowList,
  handleEdit
}) {
  const [formData, setFormData] = useState(initialFormData);

  const [formState, setFormState] = useState(list.length ? Object.keys(list[0]) : []);

  
  useEffect(() => {
    if (editState.editing) {
      setFormData(list[editState.index]);
    } else {
      setFormData({});
    }
  }, [editState, list]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    handleEdit(e); 
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e, formData);
    setFormData({});
    setEditState((prevState) => ({
      ...prevState,
      editing: false
    }));
  };

  const handleSubmit = (event, formData) => {
    event.preventDefault();
    setList((prevList) => {
      const updatedList = [...prevList];
      if (editState.editing) {
        updatedList[editState.index] = { ...updatedList[editState.index], ...formData };
      } else {
        updatedList.push(formData);
      }
      return updatedList;
    });
    setShowList(false)
  };

  const cancelEdit = () => {
    setList((prevList) => {
      const updatedList = [...prevList];
      updatedList[editState.index] = editState.beforeEdit;
      return updatedList;
    })
  }

  const handleAdd = () => {
    cancelEdit()
    setShowList(true);
    setFormData({});
    setEditState((prevState) => ({
      ...prevState,
      editing: false,
      type: "",
      index: "",
      beforeEdit: ""
    }));
  }

  return (
    <div>
      <button
      onClick={handleAdd}>Add {handling}</button>
       {showList && (
  <form onSubmit={onSubmit}>
    <div>
      {formState.map((key) => (
        <label htmlFor={key} key={key}>
          {key}: 
          <br />
          <input
            type={typeof list[0]?.[key] === "number" ? "number" : "text"}
            name={key}
            value={formData[key] || ""}
            onChange={handleChange}
          />
          <br />
        </label>
      ))}
    </div>
    <button type="submit">{editState.editing ? "Save Changes" : "Submit"}</button>
    <button type="button" onClick={() => {editState.editing ? cancelEdit() : setShowList(false)}}>
      Cancel
    </button>
  </form>
)}


    </div>
  );
}