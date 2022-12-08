import ProgressBar from "../components/ProgressBar";
import LayoutCard from "../layout/LayoutCard";
import PageTitle from "../components/PageTitle";

function Others() {
  return (
    <>
      <PageTitle title="Other Utilities">
        Bootstrap's default utility classes can be found on the official{" "}
        <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a>{" "}
        page. The custom utilities below were created to extend this theme past
        the default utility classes built into Bootstrap's framework.
      </PageTitle>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <LayoutCard title="Overflow Hidden Utilty">
            Use <code>.o-hidden</code> to set the overflow property of any
            element to hidden.
          </LayoutCard>
          <LayoutCard title="Progress Small Utility">
            <ProgressBar
              title="Normal Progress Bar"
              size="lg"
              percentage="70%"
              className="mb-3"
            />
            <ProgressBar
              title="Small Progress Bar"
              size="sm"
              percentage="70%"
              className="mb-3"
            />
            <p className="mt-3">
              Use the <code>.progress-sm</code> class along with{" "}
              <code>.progress</code>
            </p>
          </LayoutCard>
          <LayoutCard title="Dropdown - No Arrow">
            <div className="dropdown no-arrow mb-4">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown (no arrow)
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
            Add the <code>.no-arrow</code> class alongside the{" "}
            <code>.dropdown</code>
          </LayoutCard>
        </div>
        <div className="col-lg-6 mb-4">
          <LayoutCard title="Rotation Utilities">
            <div className="text-center">
              <div className="bg-primary text-white p-3 rotate-15 d-inline-block my-4">
                .rotate-15
              </div>
              <hr />
              <div className="bg-primary text-white p-3 rotate-n-15 d-inline-block my-4">
                .rotate-n-15
              </div>
            </div>
          </LayoutCard>
        </div>
      </div>
    </>
  );
}

export default Others;
