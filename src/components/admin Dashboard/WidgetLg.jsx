import { Avatar, Button, Card, CardContent, makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 2,
    margin: "20px",
    padding: "20px",
    "-webkit-box-shadow": "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
    boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
  },
  title: {
    color: theme.palette.primary.main,
  },
   status: {
    backgroundColor: "#e5faf2",
    color: "#3bb077"
  },
  items: {
    display: "flex",
    alignItems: "center",
  }
}));

const rows = [
  createData(
    0,
    "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    "Elvis Presley",
    "16 Mar, 2019",
    "1 week",
    "Approved"
  ),
  createData(
    1,
    "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    "Elvis Presley",
    "16 Mar, 2019",
    "1 week",
    "Approved"
  ),
  createData(
    2,
    "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    "Elvis Presley",
    "16 Mar, 2019",
    "1 week",
    "Approved"
  ),
  createData(
    3,
    "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    "Elvis Presley",
    "16 Mar, 2019",
    "1 week",
    "Approved"
  ),
  createData(
    4,
    "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    "Elvis Presley",
    "16 Mar, 2019",
    "1 week",
    "Approved"
  )
];

function createData(id, img, name, date, duration, status) {
  return { id, img, name, date, duration, status };
}

export default function WidgetLg() {
  const classes = useStyles({rows});

  return (
    <Card className={classes.container}>
      <CardContent>
        <Typography variant="h6" className={classes.title}>
          Latest Vacations
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className={classes.items}>
                   <Avatar style={{marginRight: 15}} alt="" src={row.img} />
                  {row.name}
                  </TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.duration}</TableCell>
                <TableCell>
                  <Button variant="outlined" className={classes.status}>{row.status}</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
