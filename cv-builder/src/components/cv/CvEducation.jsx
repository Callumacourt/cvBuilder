export default function CvEducation({schools}) {

    return (
        <div className="education">
            <br />
            <h2 className="title">Education</h2>
            {schools.map((school, index) => (
                <div className="school" key={school.name}>
                    <div className="infoGroup">
                    <h3>{school.name}</h3>
                    <p>{school.degree}</p>
                    </div>
                    <div className="infoGroup">
                    <p>{school.startYear} - {school.endYear}  {school.location}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
