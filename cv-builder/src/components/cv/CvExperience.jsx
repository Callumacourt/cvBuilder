export default function CvExperience({ jobs, setShowExperience, setEditState, deleteEle, setJobs}) {
    const editExperience = (index) => {
      setEditState({
        editing: true,
        type: 'job',
        index: index,
        beforeEdit: {...jobs[index]}
      })
      setShowExperience(true)
    }
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
                        <button onClick={() => deleteEle(index, setJobs)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}
