import React from "react";
import Drawer from "@material-ui/core/Drawer";

const Sidebar = (props) => {
  return (
    <Drawer
      className="sidebar"
      variant="permanent"
      classes={{
        paper: "sidebar",
      }}
      anchor="left"
    >
      <div>treqwe</div>
    </Drawer>
  );
};

export default Sidebar;
