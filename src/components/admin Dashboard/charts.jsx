import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chart: {
    margin: "20px",
    padding: "20px",
    "-webkit-box-shadow": "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
    boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)"
  },
  chartTitle: {
    marginBottom: 20,
    color: theme.palette.primary.main,
  }
}));

export default function Chart({ title, data, dataKey}) {
  const classes = useStyles();

  return (
    <Card className={classes.chart}>
      <CardContent>
        <Typography variant="h5" className={classes.chartTitle}>
          {title}
        </Typography>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#777" />
            <YAxis />
            <Line type="monotone" dataKey={dataKey} stroke="#00675b" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
