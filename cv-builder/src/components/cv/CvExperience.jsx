export default function CvExperience({ jobs, startEditing }) {
    return (
        <div className="experience">
            {jobs.map((job, index) => {
                return (
                    <div className="job" key={index}>
                        <h3>{job.companyName}</h3>
                        <p>{job.positionTitle}</p>
                        <p>{job.responsibilities}</p>
                        <p>From {job.startYear} - {job.endYear}</p>
                        <button onClick={() => startEditing(index)}>Edit</button>
                    </div>
                );
            })}
        </div>
    );
}
