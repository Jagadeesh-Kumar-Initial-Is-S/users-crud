function ProgressBar({ title, color, size, percentage }) {
  return (
    <>
      <h4 className="small font-weight-bold m-2">
        {title} <span class="float-right">{percentage}</span>
      </h4>
      <div className={"progress progress-" + size + " mr-2"}>
        <div
          className={"progress-bar bg-" + color}
          style={{ width: percentage }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </>
  );
}

export default ProgressBar;
