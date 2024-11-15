export default function CvEducation({ setEditState, setShowEducation, schools, setSchools, deleteEle}) {
    const startEditingSchool = (index) => {
        setEditState({
            editing: true,
            type: "school",
            index: index,
            beforeEdit: {...schools[index]}

        })
        setShowEducation(true);
    };

    return (
        <div className="education">
            {schools.map((school, index) => (
                <div className="school" key={school.name}>
                    <h3>{school.name}</h3>
                    <p>{school.degree}</p>
                    <p>{school.startYear}</p>
                    <p>{school.endYear}</p>
                    <p>{school.location}</p>
                    <button onClick={() => startEditingSchool(index)}>Edit</button>
                    <button onClick={() => deleteEle(index, setSchools)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
