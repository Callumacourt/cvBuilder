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
            {jobs.map((job, index) => {
                return (
                    <div className="job" key={index}>
                        <h3>{job.companyName}</h3>
                        <p>{job.title}</p>
                        <p>{job.description}</p>
                        <p>From {job.startYear} - {job.endYear}</p>
                        <button onClick={() => editExperience(index)}>Edit</button>
                        <button onClick={() => deleteEle(index, setJobs)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}
