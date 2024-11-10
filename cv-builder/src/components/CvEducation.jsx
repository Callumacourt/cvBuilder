export default function CvEducation({ setEditingIndex, setEditing, setShowEducation, schools, setBeforeEdit }) {
    const startEditingSchool = (index) => {
        setBeforeEdit({...schools[index]})
        setEditingIndex(index);
        setEditing(true);
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
                </div>
            ))}
        </div>
    );
}
