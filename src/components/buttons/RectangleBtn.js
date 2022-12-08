import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function RectangleBtn({ icon, color, size }) {
  return (
    <Link
      to="#"
      className={"btn btn-" + color + " btn-icon-split " + size + " mb-2"}
    >
      <span className="icon text-white-50">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className="text"> Split Button Primary</span>
    </Link>
  );
}

export default RectangleBtn;
