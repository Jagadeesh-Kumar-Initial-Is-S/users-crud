import PageTitle from "../components/PageTitle";
import LayoutCard from "./../layout/LayoutCard";
import Table from "../components/tables/Table";
function Tables() {
  return (
    <>
      <PageTitle title="Tables">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the{" "}
        <a target="_blank" href="https://datatables.net">
          official DataTables documentation
        </a>
        .
      </PageTitle>
      <LayoutCard title="DataTables Example">
        <Table />
      </LayoutCard>
    </>
  );
}

export default Tables;
