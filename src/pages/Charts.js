import LineChartCard from "./../components/home/LineChartCard";
import PieChartCard from "../components/home/PieChartCard";
import BarChartCard from "../components/home/BarChartCard";
import PageTitle from "../components/PageTitle";

function Charts() {
  return (
    <>
      <PageTitle title="Charts" />
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
        {/* Area Chart */}
        <div className="col-xl-8 col-lg-7">
          <BarChartCard />
        </div>
        {/* Pie Chart */}
        <div className="col-xl-4 col-lg-5"></div>
      </div>
    </>
  );
}

export default Charts;
