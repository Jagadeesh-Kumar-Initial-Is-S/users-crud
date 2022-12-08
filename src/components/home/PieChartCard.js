import { Link } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Direct", "Referral", "Social"],
  datasets: [
    {
      data: [55, 30, 15],
      backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
      hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf"],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  tooltips: {
    backgroundColor: "rgb(255,255,255)",
    bodyFontColor: "#858796",
    borderColor: "#dddfeb",
    borderWidth: 1,
    xPadding: 15,
    yPadding: 15,
    displayColors: false,
    caretPadding: 10,
  },
  legend: {
    display: false,
  },
  cutoutPercentage: 80,
};

function PieChartCard() {
  return (
    <div className="card shadow mb-4">
      {/* <!-- Card Header - Dropdown --> */}
      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
        <div className="dropdown no-arrow">
          <Link
            className="dropdown-toggle"
            to="#"
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
      <div className="card-body">
        <div className="chart-area">
          <div className="chartjs-size-monitor">
            <div className="chartjs-size-monitor-expand">
              <div className=""></div>
            </div>
            <div className="chartjs-size-monitor-shrink">
              <div className=""></div>
            </div>
            <Doughnut data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PieChartCard;
