import { Link } from "react-router-dom";

function ChartCard() {
  return (
    <div className="card shadow mb-4">
      {/* <!-- Card Header - Dropdown --> */}
      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
        <div className="dropdown no-arrow">
          <Link
            className="dropdown-toggle"
            tp="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
          </Link>
          <div
            className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
            aria-labelledby="dropdownMenuLink"
          >
            <div className="dropdown-header">Dropdown Header:</div>
            <Link className="dropdown-item" to="#">
              Action
            </Link>
            <Link className="dropdown-item" to="#">
              Another action
            </Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="#">
              Something else here
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- Card Body --> */}
      {/* <div className="card-body">
        <div className="chart-area">
          <div className="chartjs-size-monitor">
            <div className="chartjs-size-monitor-expand">
              <div className=""></div>
            </div>
            <div className="chartjs-size-monitor-shrink">
              <div className=""></div>
            </div>
          </div>
          <canvas
            id="myAreaChart"
            style="display: block; height: 320px; width: 611px;"
            width="916"
            height="480"
            className="chartjs-render-monitor"
          ></canvas>
        </div>
      </div> */}
    </div>
  );
}

export default ChartCard;
