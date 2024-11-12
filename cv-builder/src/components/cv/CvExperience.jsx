export default function CvExperience({ jobs, setShowExperience }) {
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
                        <p>{job.positionTitle}</p>
                        <p>{job.responsibilities}</p>
                        <p>From {job.startYear} - {job.endYear}</p>
                        <button onClick={() => editExperience(index)}>Edit</button>
                    </div>
                );
            })}
        </div>
    );
}
