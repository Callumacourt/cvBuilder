export default function CvExperience({ jobs}) {
    return (
        <div className="experience">
            <h2 className="title">Professional Experience</h2>
            {jobs.map((job, index) => {
                return (
                    <div className="job" key={index}>
                        <h3>{job.companyName}</h3>
                        <p>{job.position}</p>
                        <p>{job.description}</p>
                        <p>From {job.startYear} - {job.endYear}</p>
                    </div>
                );
            })}
        </div>
    );
}
