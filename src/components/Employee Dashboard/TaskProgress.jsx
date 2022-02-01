import { Card, makeStyles, Grid, Table, TableHead, TableRow, TableCell, TableBody, Button} from "@material-ui/core";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const data = [
  {
    subject: "Task 1",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Task 2",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Task 3",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Task 4",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Task 5",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Task 6",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    marginLeft: "20px",
    marginRight: "10px",
    marginTop: theme.spacing(3),
    // "& > *": {
     
    //   width: theme.spacing(65),
    //   height: theme.spacing(60),
    //   marginTop: theme.spacing(3),
    // },
  },
  cardContent: {
    "-webkit-box-shadow": "0px 0px 20px -10px rgba(0, 0, 0, 0.75)",
    boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
    paddingRight: theme.spacing(5),
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  grid: {
    display: "flex",
    alignItems: "center",
  },
  item2: {
      marginLeft: theme.spacing(0)
  },
  status: {
    backgroundColor: "#ffe0b2",
    color: "#ff6d00",
  }
}));

function createData(id, task, status, progress ) {
    return { id, task, status, progress };
  }
  
  const rows = [
    createData(
      0,
      "Task 1",
      "Pending",
      "Out of total section",
    ),
    createData(
      1,
      "Task 2",
      "Pending",
      "Out of total section",
    ),
    createData(
      2,
      "Task 3",
      "Pending",
      "Out of total section",
    ),
    createData(
      3,
      "Task 4",
      "Pending",
      "Out of total section",
    ),
    createData(
      4,
      "Task 5",
      "Pending",
      "Out of total section",
    ),
    createData(
        5,
        "Task 6",
        "Pending",
        "Out of total section",
      ),
      createData(
        6,
        "Task 7",
        "Pending",
        "Out of total section",
      ),
  ];

export default function TaskProgress() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.cardContent}>
        <Grid container className={classes.grid}>
          <Grid items sm={4} className={classes.item}>
            <RadarChart
              cx={300}
              cy={250}
              outerRadius={150}
              width={500}
              height={500}
              data={data}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Employee 1"
                dataKey="A"
                stroke="#00675b"
                fill="#52c7b8"
                fillOpacity={0.6}
              />
            </RadarChart>
          </Grid>
          <Grid items sm={2} className={classes.item}></Grid>
          <Grid items sm={6} className={classes.item2}>
          <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>List of Tasks</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Progress</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.task}</TableCell>
                <TableCell>
                    <Button variant="outlined" className={classes.status}> {row.status}</Button>
                   </TableCell>
                <TableCell>
                    {row.progress}
                    <Box display="flex" alignItems="center">
      <Box width="60%" mr={1}>
        <LinearProgress variant="determinate" />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">60%</Typography>
      </Box>
    </Box>
                    </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
