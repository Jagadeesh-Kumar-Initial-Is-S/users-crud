import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BrandButton({ icon, text, classTxt }) {
  return (
    <Link to="#" class={"btn " + classTxt + " btn-block"}>
      {/* <i class="fab fa-google fa-fw"></i> */}
      <FontAwesomeIcon icon={icon} />
      {text}
    </Link>
  );
}

export default BrandButton;
