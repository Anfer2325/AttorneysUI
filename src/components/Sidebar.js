import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
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
      <div>
        Bienvenid@: <br></br> <b>Anfernee Castillo</b>
      </div>
      <Divider />
      <Button className="sidebar__button" variant="contained">
        Dashboard
      </Button>
      <Button className="sidebar__button" variant="contained">
        Ver Cuentas
      </Button>
      <Button className="sidebar__button" variant="contained">
        Agregar Cliente
      </Button>
      <Button className="sidebar__button" variant="contained">
        Agregar Cuenta
      </Button>
      <Button className="sidebar__button" variant="contained">
        Directorio
      </Button>
      <Button className="sidebar__button" variant="contained">
        Default
      </Button>
    </Drawer>
  );
};

export default Sidebar;
