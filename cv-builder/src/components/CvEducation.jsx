export default function CvEducation({schools}){
    return (
        <div className="education">
            {schools.map((school => {
                return (
                    <div className="school">
                    <h3>{school.name}</h3>
                    <p>{school.degree}</p>
                    <p>{school.startYear}</p>
                    <p>{school.endYear}</p>
                    <p>{school.location}</p>
                    </div>
                )
            }))}
        </div>
    )
}