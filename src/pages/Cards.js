import StatCard from "../components/StatCard";
import {
  faCalendar,
  faDollar,
  faClipboard,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import LayoutCard from "../layout/LayoutCard";
import LayoutCardCollapsible from "../layout/LayoutCardCollapsible";
import PageTitle from "../components/PageTitle";

function Cards() {
  return (
    <>
      <PageTitle title="Cards" />
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
        <div className="col-lg-6 mb-4">
          <LayoutCard title="Default Card Example">
            <p>
              This card uses Bootstrap's default styling with no utility classes
              added. Global styles are the only things modifying the look and
              feel of this default card example.
            </p>
          </LayoutCard>

          <LayoutCard title="Basic Card Example">
            <p>
              The styling for this basic card example is created by using
              default Bootstrap utility classes. By using utility classes, the
              style of the card component can be easily modified with no need
              for any custom CSS!
            </p>
          </LayoutCard>
        </div>
        <div className="col-lg-6 mb-4">
          <LayoutCard title="Dropdown Card Example">
            <p>
              Dropdown menus can be placed in the card header in order to extend
              the functionality of a basic card. In this dropdown card example,
              the Font Awesome vertical ellipsis icon in the card header can be
              clicked on in order to toggle a dropdown menu.
            </p>
          </LayoutCard>
          <LayoutCardCollapsible title="Collapsable card example">
            <p>
              This is a collapsable card example using Bootstrap's built in
              collapse functionality. Click on the card header to see the card
              body collapse and expand!
            </p>
          </LayoutCardCollapsible>
        </div>
      </div>
    </>
  );
}

export default Cards;
