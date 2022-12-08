import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";
import {
  faCalendar,
  faDollar,
  faClipboard,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import LineChartCard from "./../components/home/LineChartCard";
import PieChartCard from "../components/home/PieChartCard";
import ProjectCard from "../components/home/ProjectCard";
import ColorCards from "../components/home/ColorCards";
import Development from "../components/home/Development";
import LayoutCard from "./../layout/LayoutCard";
import ProgressBar from "../components/ProgressBar";

function Home() {
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <Link
          to="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </Link>
      </div>
      <div className="row">
        {/* <!-- Earnings (Monthly) Card Example --> */}
        <div className="col-xl-3 col-md-6 mb-4">
          <StatCard
            title="EARNINGS (MONTHLY)"
            value="$40,000"
            icon={faCalendar}
            color="primary"
          />
        </div>

        {/* <!-- Earnings (Monthly) Card Example --> */}
        <div className="col-xl-3 col-md-6 mb-4">
          <StatCard
            title="EARNINGS (ANNUAL)"
            value="$215,000"
            icon={faDollar}
            color="success"
          />
        </div>

        {/* <!-- Earnings (Monthly) Card Example --> */}
        <div className="col-xl-3 col-md-6 mb-4">
          <StatCard title="Tasks" value="50%" icon={faClipboard} color="info" />
        </div>

        {/* <!-- Pending Requests Card Example --> */}
        <div className="col-xl-3 col-md-6 mb-4">
          <StatCard
            title="Pending Requests"
            value="18"
            icon={faComments}
            color="warning"
          />
        </div>
      </div>
      <div className="row">
        {/* Area Chart */}
        <div className="col-xl-8 col-lg-7">
          <LineChartCard />
        </div>
        {/* Pie Chart */}
        <div className="col-xl-4 col-lg-5">
          <PieChartCard />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <LayoutCard title="Projects">
            <ProgressBar
              title="Server Migration"
              color="danger"
              size="lg"
              percentage="20%"
            />

            <ProgressBar
              title="Sales Tracking"
              color="warning"
              size="lg"
              percentage="40%"
            />

            <ProgressBar
              title="Customer Database"
              color="primary"
              size="lg"
              percentage="60%"
            />

            <ProgressBar
              title="Payout Details"
              color="success"
              size="lg"
              percentage="60%"
            />

            <ProgressBar
              title="Account setup"
              color="info"
              size="lg"
              percentage="40%"
            />
          </LayoutCard>
          <ColorCards />
        </div>
        <div className="col-lg-6 mb-4">
          <Development />
        </div>
      </div>
    </>
  );
}

export default Home;
