import React from "react";
import CollapsibleTable from "./CollapsibleTable";
import ReactVirtualizedTable from "./ReactVirtualizedTable";
import EnhancedTable from "./EnhancedTable";
const Dashboard = () => {
  return (
    <div className="content__dashboard">
      <div className="cards-section">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
      <div className="content__table">
        {/* <CollapsibleTable></CollapsibleTable> */}
        {/* <ReactVirtualizedTable></ReactVirtualizedTable> */}
        <EnhancedTable></EnhancedTable>
      </div>
    </div>
  );
};

export default Dashboard;
