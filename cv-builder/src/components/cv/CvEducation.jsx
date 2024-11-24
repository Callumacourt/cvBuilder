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
            <h2 className="title">Education</h2>
            {schools.map((school, index) => (
                <div className="school" key={school.name}>
                    <div className="infoGroup">
                    {school.startYear} - {school.endYear}
                    {school.location}
                    </div>
                    <div className="infoGroup">
                    <h3>{school.name}</h3>
                    {school.degree}
                    <button onClick={() => startEditingSchool(index)}>Edit</button>
                    <button onClick={() => deleteEle(index, setSchools)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
