import React from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import EmailIcon from "@material-ui/icons/Email";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import InfoIcon from "@material-ui/icons/Info";
import Dialog from "@material-ui/core/Dialog";

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    history: [
      {
        vasa: "11091700",
        saldo: "11091700",
        vehiculo: "FT",
        estado: "Judicial",
        fechaAsignacion: "2020-01-02",
        opciones: "",
      },
      {
        vasa: "123442312",
        saldo: "12500",
        vehiculo: "FCB",
        estado: "Extrajudicial",
        fechaAsignacion: "2020-01-02",
        opciones: "",
      },
    ],
  };
}

//DATA DEL TALBE
const rows = [
  createData("Anfernee Castillo", 30813647, 94662403, 2, 0),
  createData("Mirna Martinez", 16746169, 95907623, 2, 0),
  createData("Maria Erlinda Lopez Fuentes", 17982256, 94662403, 2, 0),
  createData("Danilo Armando Lopez", 26527886, 95470659, 2, 0),
  createData("EVA LIZETH BARDALES BENITEZ", 10655647, 97079575, 2, 0),
  createData("EVER JONATHAN MARTINEZ LOPEZ", 29239100, 98161964, 2, 0),
  createData("FANNY GABRIELA MENDOZA MORAZAN", 20446716, 99214999, 2, 0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

//HEADER DEL TABLE
const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Nombre",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Cliente Unico",
  },
  { id: "fat", numeric: true, disablePadding: false, label: "# Contacto" },
  { id: "carbs", numeric: true, disablePadding: false, label: "# Cuentas" },
  { id: "protein", numeric: true, disablePadding: false, label: "Opciones" },
];

//HEADER DEL TABLE

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  row: {
    width: "100%",
    height: "50px",
  },
  paper: {
    width: "100%",
    height: "100%",
    flexWrap: "wrap",
    display: "flex",
  },
  table2: {
    height: "100%",
    backgroundColor: "red",
  },
  table: {
    minWidth: 750,
    height: "99%",
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  cell: {
    padding: "0px",
  },
}));
const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const [openDialog, setOpenDialog] = React.useState(false);
  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={openDialog}
        onClose={handleClose}
        // TransitionComponent={Transition}
        unmountOnExit
      ></Dialog>
      <TableRow style={{ height: "10px" }}>
        <TableCell style={{ height: "10px" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <ExpandLessIcon></ExpandLessIcon>
            ) : (
              <ExpandMoreIcon></ExpandMoreIcon>
            )}
          </IconButton>
        </TableCell>
        <TableCell style={{ height: "10px" }} component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell
          align="right"
          onClick={(e, name) => {
            console.log(row.name);
          }}
          style={{ height: "10px" }}
        >
          {row.calories}
        </TableCell>
        <TableCell style={{ height: "10px" }} align="right">
          {row.fat}
        </TableCell>
        <TableCell style={{ height: "10px" }} align="right">
          {row.carbs}
        </TableCell>
        <TableCell style={{ height: "10px" }} align="right">
          <IconButton>
            <Tooltip title="Ver informacion del cliente">
              <PermIdentityIcon></PermIdentityIcon>
            </Tooltip>
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow style={{ paddingBottom: 0, paddingTop: 0, height: "0px" }}>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0, height: "0px" }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Cuentas
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Vasa</TableCell>
                    <TableCell>Saldo (Lps)</TableCell>
                    <TableCell align="right">Vehiculo</TableCell>
                    <TableCell align="right">Estado</TableCell>
                    <TableCell align="right">Fecha Asignacion</TableCell>
                    <TableCell align="right">Opciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.vasa}>
                      <TableCell component="th" scope="row">
                        {historyRow.vasa}
                      </TableCell>
                      <TableCell>{historyRow.saldo}</TableCell>
                      <TableCell align="right">{historyRow.vehiculo}</TableCell>
                      <TableCell align="right">{historyRow.estado}</TableCell>
                      <TableCell align="right">
                        {historyRow.fechaAsignacion}
                      </TableCell>
                      <TableCell align="right">
                        <IconButton>
                          <Tooltip title="Agregar Gestion">
                            <AddIcon></AddIcon>
                          </Tooltip>
                        </IconButton>
                        <IconButton>
                          <Tooltip title="Crear nota de cobro">
                            <EmailIcon></EmailIcon>
                          </Tooltip>
                        </IconButton>
                        <IconButton>
                          <Tooltip title="Ver informacion de la cuenta">
                            <InfoIcon
                              onClick={() => {
                                setOpenDialog(true);
                              }}
                            ></InfoIcon>
                          </Tooltip>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    // const selectedIndex = selected.indexOf(name);
    // let newSelected = [];
    // if (selectedIndex === -1) {
    //   newSelected = newSelected.concat(selected, name);
    // } else if (selectedIndex === 0) {
    //   newSelected = newSelected.concat(selected.slice(1));
    // } else if (selectedIndex === selected.length - 1) {
    //   newSelected = newSelected.concat(selected.slice(0, -1));
    // } else if (selectedIndex > 0) {
    //   newSelected = newSelected.concat(
    //     selected.slice(0, selectedIndex),
    //     selected.slice(selectedIndex + 1)
    //   );
    // }
    // setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
          <TableContainer
            style={{ width: "100%", height: "calc(100% - 50px)" }}
          >
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody className="main-table-body">
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <Row
                        style={{ height: "50px" }}
                        key={row.name}
                        row={row}
                      />
                    );
                  })}
                <TableRow></TableRow>
                {emptyRows > 0 && (
                  <TableRow style={{ height: "0px" }}>
                    <TableCell colSpan={6} style={{ padding: "0px" }} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            style={{ height: "50px", width: "100%", overflow: "hidden" }}
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </React.Fragment>
  );
}
