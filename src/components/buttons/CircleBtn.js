import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function CircleBtn({ icon, color, size }) {
  return (
    <Link to="#" className={"btn btn-" + color + " btn-circle mr-2 " + size}>
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
}

export default CircleBtn;
