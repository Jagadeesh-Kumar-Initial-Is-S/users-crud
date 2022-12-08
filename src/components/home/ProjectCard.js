function ProjectCard() {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
      </div>
      <div className="card-body">
        <h4 className="small font-weight-bold">
          Server Migration <span className="float-right">20%</span>
        </h4>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
