import { Link } from "react-router-dom";
import { number_format } from "../../helper/helper";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 10,
      right: 25,
      top: 25,
      bottom: 0,
    },
  },
  scales: {
    xAxes: [
      {
        time: {
          unit: "month",
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          maxTicksLimit: 6,
        },
        maxBarThickness: 25,
      },
    ],
    yAxes: [
      {
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return "$" + number_format(value);
          },
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2],
        },
      },
    ],
  },
  legend: {
    display: false,
  },
  tooltips: {
    titleMarginBottom: 10,
    titleFontColor: "#6e707e",
    titleFontSize: 14,
    backgroundColor: "rgb(255,255,255)",
    bodyFontColor: "#858796",
    borderColor: "#dddfeb",
    borderWidth: 1,
    xPadding: 15,
    yPadding: 15,
    displayColors: false,
    caretPadding: 10,
    callbacks: {
      label: function (tooltipItem, chart) {
        var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || "";
        return datasetLabel + ": $" + number_format(tooltipItem.yLabel);
      },
    },
  },
};

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Revenue",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: [4215, 5312, 6251, 7841, 9821, 14984],
    },
  ],
};

function BarChartCard() {
  return (
    <div className="card shadow mb-4">
      {/* <!-- Card Header - Dropdown --> */}
      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
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
          </div>
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
}

export default BarChartCard;
