import {
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

function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "UN Processes and Mechanisms",
    "UNCO, UNDP, UNEP, UNESCO"
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Team A",
    "London, UK",
    "Indigenous Peoples and Development",
    "UNCO, UNDP, UNEP, UNESCO"
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "Mapping Agency Initiatives",
    "UNCO, UNDP, UNEP, UNESCO"
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Team B",
    "Gary, IN",
    "Indigenous Peoples and Development",
    "UNCO, UNDP, UNEP, UNESCO"
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "UN Processes and Mechanisms",
    "UNCO, UNDP, UNEP, UNESCO"
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
  title: {
    margin: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  seeMore: {
    marginTop: theme.spacing(1),
    fontSize: 14
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
              <TableCell>Date</TableCell>
              <TableCell>Team / Individual Name</TableCell>
              <TableCell>Venue</TableCell>
              <TableCell>Agenda</TableCell>
              <TableCell>Participants</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell>{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardActionArea className={classes.seeMore}>
        <Link color="primary" href="#" className={classes.link}>
          See more orders
        </Link>
      </CardActionArea>
    </Card>
  );
}
