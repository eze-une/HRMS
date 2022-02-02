import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Link,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";

function createData(id, img, date, name, departement, salery, comission,status) {
  return { id, img, date, name, departement, salery, comission,status };
}

const rows = [
  createData(
    0,
    "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "1/31/2022",
    "Elvis Presley",
    "Department 1",
    "6000.00",
    "__.__",
    "Approved",
  ),
  createData(
    1,
    "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "1/31/2022",
    "Jhon Doe",
    "Department 1",
    "6000.00",
    "__.__",
    "Approved",
  ),
  createData(
    2,
    "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "1/31/2022",
    "Tom Scholz",
    "Department 1",
    "6000.00",
    "__.__",
    "Approved",
  ),
  createData(
    3,
    "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "1/31/2022",
    "Jhon Doe",
    "Department 1",
    "6000.00",
    "400.00",
    "Approved",
  ),
  createData(
    4,
    "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Department 1",
    "6000.00",
    "400.00",
    "Approved",
  ),
];

const useStyles = makeStyles((theme) => ({
container: {
    margin: "20px",
    padding: "20px",
    "-webkit-box-shadow": "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
    boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
    cursor: "pointer"
},
  profile: {
    display: "flex",
    alignItems: "center"
  },
  title: {
    margin: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  seeMore: {
    marginTop: theme.spacing(1),
    fontSize: 14
  },
  status: {
    backgroundColor: "#e5faf2",
    color: "#3bb077"
  },
}));

export default function DetailInfo() {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <CardContent>
        <Typography variant="h5" className={classes.title}>
          Detailed Employee Info
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                Name
                </TableCell>
              <TableCell>Hired Date</TableCell>
              <TableCell>Departement</TableCell>
              <TableCell align="right">Salery</TableCell>
              <TableCell align="right">Commission</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className={classes.profile}>
                  <Avatar 
                    src={row.img}
                    style={{marginRight: "10px"}}
                  />
                  {row.name}
                  </TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.departement}</TableCell>
                <TableCell align="right">{row.salery}</TableCell>
                <TableCell align="right">{row.comission}</TableCell>
                <TableCell>
                <Button variant="outlined" className={classes.status}>{row.status}</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardActionArea className={classes.seeMore}>
        <Link color="primary" href="#" className={classes.link}>
          See more Employee Details
        </Link>
      </CardActionArea>
    </Card>
  );
}
