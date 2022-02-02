import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { ComposedChart, Area, CartesianGrid, Tooltip } from "recharts";

const data = [
  {
    name: "Task 1",
    duration: 1400,
  },
  {
    name: "Task 2",
    duration: 500,
  },
  {
    name: "Task 3",
    duration: 1200,
  },
  {
    name: "Task 4",
    duration: 700,
  },
  {
    name: "Task 5",
    duration: 1300,
  },
  {
    name: "Task 6",
    duration: 1000,
  },
];

const data2 = [
  {
    name: "Task 1",
    duration: 1400,
  },
  {
    name: "Task 2",
    duration: 900,
  },
  {
    name: "Task 3",
    duration: 400,
  },
  {
    name: "Task 4",
    duration: 700,
  },
  {
    name: "Task 5",
    duration: 1300,
  },
  {
    name: "Task 6",
    duration: 2000,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: "auto",
      width: theme.spacing(60),
      height: theme.spacing(30),
      marginTop: theme.spacing(3),
    },
  },
  cardContent: {
    "-webkit-box-shadow": "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
    boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
  },
  cardItems: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    fontSize: "large",
  },
  text2: {
    fontSize: "20px",
    color: "#555",
  },
  title: {
      color: "#444"
  },
}));

export default function Deposits() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.cardContent}>
        <CardContent className={classes.cardItems}>
          <ComposedChart
            width={500}
            height={180}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="duration"
              fill="lightgreen"
              stroke="green"
            />
          </ComposedChart>

          <Typography variant="h5" className={classes.title}>
            {" "}
            Active Task
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.cardContent}>
        <CardContent className={classes.cardItems}>
          <ComposedChart
            width={500}
            height={180}
            data={data2}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="duration"
              fill="lightgreen"
              stroke="green"
            />
          </ComposedChart>

          <Typography variant="h5" className={classes.title}>
            {" "}
            Pending Task
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
