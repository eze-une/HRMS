import React from "react";
import {
  Chart,
  PieSeries,
  Tooltip,
} from "@devexpress/dx-react-chart-material-ui";
import { Card, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    margin: "20px",
    padding: "20px",
    "-webkit-box-shadow": "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
    boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
  },
  title: {
    color: theme.palette.primary.main,
  },
}));

export default function WidgetSm() {
  const classes = useStyles();

  const data = [
    { argument: "Total Days Request", value: 20 },
    { argument: "Days on this Request", value: 40 },
    { argument: "Number of Days Remeining", value: 10 },
  ];

  return (
    <Card className={classes.container}>
      <Chart data={data} height={300}>
        <PieSeries
          valueField="value"
          argumentField="argument"
          innerRadius={0.6}
        />
        <Typography variant="h5" className={classes.title}>
          Vacation
        </Typography>
      </Chart>
    </Card>
  );
}
