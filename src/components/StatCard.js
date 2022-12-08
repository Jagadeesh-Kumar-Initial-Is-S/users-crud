import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function StatCard({ title, value, icon, color }) {
  console.log(icon);
  return (
    <div
      className={"card border-left-" + color + " shadow h-100 py-2 text-left"}
    >
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
              {title}
            </div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">
              {value}
            </div>
          </div>
          <div className="col-auto">
            <FontAwesomeIcon icon={icon} className="fas fa-2x text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
