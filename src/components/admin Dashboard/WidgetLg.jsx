import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { BarChart, Bar, XAxis, Tooltip, Legend } from "recharts";

const data = [
  {
    name: "Jan",
    vacancies: 4000,
    candidates: 2400,
  },
  {
    name: "Feb",
    vacancies: 3000,
    candidates: 1398,
  },
  {
    name: "Mar",
    vacancies: 2000,
    candidates: 9800,
  },
  {
    name: "Apr",
    vacancies: 7780,
    candidates: 6908,
  },
  {
    name: "May",
    vacancies: 1890,
    candidates: 4800,
  },
  {
    name: "Jun",
    vacancies: 2390,
    candidates: 3800,
  },
  {
    name: "Jul",
    vacancies: 1490,
    candidates: 2300,
  },
  {
    name: "Aug",
    vacancies: 3490,
    candidates: 4300,
  },
  {
    name: "Sept",
    vacancies: 3490,
    candidates: 4300,
  },
  {
    name: "Nov",
    vacancies: 5490,
    candidates: 7300,
  },
  {
    name: "Dec",
    vacancies: 8490,
    candidates: 9900,
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 2,
    marginLeft: "20px",
    padding: "20px",
    width: "600px",
    height: "400px",
    "-webkit-box-shadow": "0px 0px 20px -10px rgba(0, 0, 0, 0.75)",
    boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
  },
  title: {
    color: theme.palette.primary.main,
  },
  status: {
    backgroundColor: "#e5faf2",
    color: "#3bb077",
  },
}));

export default function WidgetLg() {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <CardContent>
        <Typography variant="h5" className={classes.title}>
          Employee Recruitment Information
        </Typography>
      </CardContent>
      <CardContent>
      <BarChart
        width={440}
        height={300}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="vacancies" fill="#52c7b8" />
        <Bar dataKey="candidates" fill="#00675b" />
      </BarChart>
      </CardContent>
    </Card>
  );
}
