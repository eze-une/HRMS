import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
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
    marginBottom: 20
  }
}));

export default function Chart({ title, data, dataKey, grid }) {
  const classes = useStyles();

  return (
    <Card className={classes.chart}>
      <CardContent>
        <Typography variant="h6" className={classes.chartTitle}>
          {title}
        </Typography>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
