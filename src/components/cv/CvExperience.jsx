export default function CvExperience({ jobs}) {
    return (
        <div className="experience">
            <h2 className="title">Professional Experience</h2>
            {jobs.map((job, index) => {
                return (
                    <div className="job" key={index}>
                        <div className="infoGroup">
                        <p>{job.startYear} - {job.endYear} {job.location}</p>
                        </div>
                        <div className="infoGroup">
                        <h3>{job.companyName}</h3>
                        <p>{job.position}</p>
                        <p className="description">{job.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
