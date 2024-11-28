import React, { useState } from "react";
import CreateForm from "./Form";

export default function Section({
    title,
    items,
    setItems,
    type,
    editState,
    setEditState,
    handleEdit, 
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleAddClick = () => setEditState({ type, index: null, beforeEdit: null });

    const handleEditClick = (index) => {
        setEditState({
            type,
            index,
            beforeEdit: items[index], // Save the item before editing
        });
    };

    const handleDelete = (index) =>
        setItems((prev) => prev.filter((_, i) => i !== index));

    const renderForm = () => (
        <CreateForm
            handling={type === "schools" ? "School" : "Job"}
            list={items}
            setList={setItems}
            formData={
                editState.index !== null ? items[editState.index] : {}
            }
            editState={editState}
            setEditState={setEditState}
            handleEdit={handleEdit} 
        />
    );

    return (
        <div className={`${type}-section`}>
            <div
                onClick={() => setIsExpanded((prev) => !prev)}
                className={`section-header ${isExpanded ? "active" : ""}`}
            >
                {title}
            </div>
            {isExpanded && (
                <div className="section-content">
                    {editState.type === type ? (
                        renderForm()
                    ) : (
                        <>
                            {items.map((item, index) => (
                                <div className="section-content-child" key={index}>
                                    <span
                                        onClick={() => handleEditClick(index)}
                                    >
                                        {type === "schools"
                                            ? item.name
                                            : item.position}
                                    </span>
                                    <button
                                        className="delete"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDelete(index);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                            <div className="addButton">
                                <button onClick={handleAddClick}>
                                    Add {type === "schools" ? "School" : "Job"}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
