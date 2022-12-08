import LayoutCard from "../layout/LayoutCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faCheck,
  faInfo,
  faExclamationTriangle,
  faTrash,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import CircleBtn from "../components/buttons/CircleBtn";
import RectangleBtn from "../components/buttons/RectangleBtn";
import PageTitle from "../components/PageTitle";
import BrandButton from "../components/buttons/BrandButton";

function Buttons() {
  return (
    <>
      <PageTitle title="Buttons" />
      <div className="row">
        <div className="col-lg-6">
          <LayoutCard title="Circle Buttons">
            <p>
              Use Font Awesome Icons (included with this theme package) along
              with the circle buttons as shown in the examples below!
            </p>

            <div className="mb-2">
              <code>.btn-circle</code>
            </div>
            <CircleBtn icon={faFacebookF} color="primary" size="" />
            <CircleBtn icon={faCheck} color="success" size="" />
            <CircleBtn icon={faInfo} color="info" size="" />
            <CircleBtn icon={faExclamationTriangle} color="warning" size="" />
            <CircleBtn icon={faTrash} color="danger" size="" />

            <div className="mb-2 mt-2">
              <code>.btn-circle .btn-sm</code>
            </div>
            <CircleBtn icon={faFacebookF} color="primary" size="btn-sm" />
            <CircleBtn icon={faCheck} color="success" size="btn-sm" />
            <CircleBtn icon={faInfo} color="info" size="btn-sm" />
            <CircleBtn
              icon={faExclamationTriangle}
              color="warning"
              size="btn-sm"
            />
            <CircleBtn icon={faTrash} color="danger" size="btn-sm" />

            <div className="mb-2 mt-2">
              <code>.btn-circle .btn-lg</code>
            </div>
            <CircleBtn icon={faFacebookF} color="primary" size="btn-lg" />
            <CircleBtn icon={faCheck} color="success" size="btn-lg" />
            <CircleBtn icon={faInfo} color="info" size="btn-lg" />
            <CircleBtn
              icon={faExclamationTriangle}
              color="warning"
              size="btn-lg"
            />
            <CircleBtn icon={faTrash} color="danger" size="btn-lg" />
          </LayoutCard>
          <LayoutCard title="Brand Buttons">
            <p>
              Google and Facebook buttons are available featuring each company's
              respective brand color. They are used on the user login and
              registration pages.
            </p>
            <p>
              You can create more custom buttons by adding a new color variable
              in the
              <code>_variables.scss</code> file and then using the Bootstrap
              button variant mixin to create a new style, as demonstrated in the{" "}
              <code>_buttons.scss</code>
              file.
            </p>
            <BrandButton
              icon={faGoogle}
              text=".btn-google"
              classTxt="btn-google"
            />
            <BrandButton
              icon={faFacebookF}
              text=".btn-facebook"
              classTxt="btn-facebook"
            />
          </LayoutCard>
        </div>
        <div className="col-lg-6">
          <LayoutCard title="Split Buttons with icons">
            <p>
              Use Font Awesome Icons (included with this theme package) along
              with the circle buttons as shown in the examples below!
            </p>
            <div className="mb-2">
              <code>.btn-circle</code>
            </div>
            <RectangleBtn icon={faFlag} color="primary" size="" /> <br />
            <RectangleBtn icon={faCheck} color="success" size="" /> <br />
            <RectangleBtn icon={faInfo} color="info" size="" /> <br />
            <RectangleBtn
              icon={faExclamationTriangle}
              color="warning"
              size=""
            />{" "}
            <br />
            <RectangleBtn icon={faTrash} color="danger" size="" />
            <p>Also works with small and large button classes!</p>
            <RectangleBtn icon={faFlag} color="primary" size="btn-lg" /> <br />
            <RectangleBtn icon={faFlag} color="primary" size="btn-sm" />
          </LayoutCard>
        </div>
      </div>
    </>
  );
}

export default Buttons;
