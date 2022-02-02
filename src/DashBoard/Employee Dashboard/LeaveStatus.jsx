import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    Tooltip
  } from "recharts";
  
  const data01 = [
    { hour: "2:00", index: 1, value: 0 },
    { hour: "3:00", index: 1, value: 0 },
    { hour: "4:00", index: 1, value: 0 },
    { hour: "5:00", index: 1, value: 0 },
    { hour: "6:00", index: 1, value: 0 },
    { hour: "7:00", index: 1, value: 0 },
    { hour: "8:00", index: 1, value: 0 },
    { hour: "9:00", index: 1, value: 0 },
    { hour: "10:00", index: 1, value: 0 },
    { hour: "11:00", index: 1, value: 0 },
    { hour: "12:00", index: 1, value: 0 },
  ];
  
  const data02 = [
    { hour: "2:00", index: 1, value: 1 },
    { hour: "3:00", index: 1, value: 1 },
    { hour: "4:00", index: 1, value: 1 },
    { hour: "5:00", index: 1, value: 1 },
    { hour: "6:00", index: 1, value: 1 },
    { hour: "7:00", index: 1, value: 1 },
    { hour: "8:00", index: 1, value: 1 },
    { hour: "9:00", index: 1, value: 1 },
    { hour: "10:00", index: 1, value: 1 },
    { hour: "11:00", index: 1, value: 1 },
    { hour: "12:00", index: 1, value: 1 },
  ];
  
  const parseDomain = () => [
    0,
    Math.max(
      Math.max.apply(
        null,
        data01.map((entry) => entry.value)
      ),
      Math.max.apply(
        null,
        data02.map((entry) => entry.value)
      )
    )
  ];
  
  const renderTooltip = (props: any) => {
    const { active, payload } = props;
  
    if (active && payload && payload.length) {
      const data = payload[0] && payload[0].payload;
  
      return (
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #999",
            margin: 0,
            padding: 10
          }}
        >
          <p>{data.hour}</p>
          <p>
            <span>value: </span>
            {data.value}
          </p>
        </div>
      );
    }
  
    return null;
  };

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "20px",
        padding: "20px",
        "-webkit-box-shadow": "0px 0px 20px -10px rgba(0, 0, 0, 0.75)",
    boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
        cursor: "pointer"
    },
    title: {
        color: theme.palette.primary.main
    }

}));

export default function LeaveStatus() {
    const classes = useStyles();
    const domain = parseDomain();
    const range = [16, 225];

  return (
  <Card className={classes.container}>
  <CardContent>
    <Typography variant="h5" className={classes.title}>
     My Leave Status
    </Typography>
    </CardContent>
    <CardContent>
    <div>
      <ScatterChart
        width={900}
        height={60}
        margin={{
          top: 10,
          right: 0,
          bottom: 0,
          left: 0
        }}
      >
        <XAxis
          type="category"
          dataKey="hour"
          interval={0}
          tick={{ fontSize: 0 }}
          tickLine={{ transform: "translate(0, -6)" }}
        />
        <YAxis
          type="number"
          dataKey="index"
          name="sunday"
          height={10}
          width={80}
          tick={false}
          tickLine={false}
          axisLine={false}
          label={{ value: "Sunday", position: "insideRight" }}
        />
        <ZAxis type="number" dataKey="value" domain={domain} range={range} />
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          wrapperStyle={{ zIndex: 100 }}
          content={renderTooltip}
        />
        <Scatter data={data01} fill="#009688" />
      </ScatterChart>

      <ScatterChart
        width={900}
        height={60}
        margin={{
          top: 10,
          right: 0,
          bottom: 0,
          left: 0
        }}
      >
        <XAxis
          type="category"
          dataKey="hour"
          name="hour"
          interval={0}
          tick={{ fontSize: 0 }}
          tickLine={{ transform: "translate(0, -6)" }}
        />
        <YAxis
          type="number"
          dataKey="index"
          height={10}
          width={80}
          tick={false}
          tickLine={false}
          axisLine={false}
          label={{ value: "Monday", position: "insideRight" }}
        />
        <ZAxis type="number" dataKey="value" domain={domain} range={range} />
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          wrapperStyle={{ zIndex: 100 }}
          content={renderTooltip}
        />
        <Scatter data={data02} fill="#009688" />
      </ScatterChart>

      <ScatterChart
        width={900}
        height={60}
        margin={{
          top: 10,
          right: 0,
          bottom: 0,
          left: 0
        }}
      >
        <XAxis
          type="category"
          dataKey="hour"
          name="hour"
          interval={0}
          tick={{ fontSize: 0 }}
          tickLine={{ transform: "translate(0, -6)" }}
        />
        <YAxis
          type="number"
          dataKey="index"
          height={10}
          width={80}
          tick={false}
          tickLine={false}
          axisLine={false}
          label={{ value: "Tuesday", position: "insideRight" }}
        />
        <ZAxis type="number" dataKey="value" domain={domain} range={range} />
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          wrapperStyle={{ zIndex: 100 }}
          content={renderTooltip}
        />
        <Scatter data={data01} fill="#009688" />
      </ScatterChart>

      <ScatterChart
        width={900}
        height={60}
        margin={{
          top: 10,
          right: 0,
          bottom: 0,
          left: 0
        }}
      >
        <XAxis
          type="category"
          dataKey="hour"
          name="hour"
          interval={0}
          tick={{ fontSize: 0 }}
          tickLine={{ transform: "translate(0, -6)" }}
        />
        <YAxis
          type="number"
          dataKey="index"
          height={10}
          width={80}
          tick={false}
          tickLine={false}
          axisLine={false}
          label={{ value: "Wednesday", position: "insideRight" }}
        />
        <ZAxis type="number" dataKey="value" domain={domain} range={range} />
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          wrapperStyle={{ zIndex: 100 }}
          content={renderTooltip}
        />
        <Scatter data={data02} fill="#009688" />
      </ScatterChart>

      <ScatterChart
        width={900}
        height={60}
        margin={{
          top: 10,
          right: 0,
          bottom: 0,
          left: 0
        }}
      >
        <XAxis
          type="category"
          dataKey="hour"
          name="hour"
          interval={0}
          tick={{ fontSize: 0 }}
          tickLine={{ transform: "translate(0, -6)" }}
        />
        <YAxis
          type="number"
          dataKey="index"
          height={10}
          width={80}
          tick={false}
          tickLine={false}
          axisLine={false}
          label={{ value: "Thursday", position: "insideRight" }}
        />
        <ZAxis type="number" dataKey="value" domain={domain} range={range} />
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          wrapperStyle={{ zIndex: 100 }}
          content={renderTooltip}
        />
        <Scatter data={data01} fill="#009688" />
      </ScatterChart>

      <ScatterChart
        width={900}
        height={60}
        margin={{
          top: 10,
          right: 0,
          bottom: 0,
          left: 0
        }}
      >
        <XAxis
          type="category"
          dataKey="hour"
          name="hour"
          interval={0}
          tick={{ fontSize: 0 }}
          tickLine={{ transform: "translate(0, -6)" }}
        />
        <YAxis
          type="number"
          dataKey="index"
          height={10}
          width={80}
          tick={false}
          tickLine={false}
          axisLine={false}
          label={{ value: "Friday", position: "insideRight" }}
        />
        <ZAxis type="number" dataKey="value" domain={domain} range={range} />
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          wrapperStyle={{ zIndex: 100 }}
          content={renderTooltip}
        />
        <Scatter data={data02} fill="#009688" />
      </ScatterChart>

      <ScatterChart
        width={900}
        height={60}
        margin={{
          top: 10,
          right: 0,
          bottom: 0,
          left: 0
        }}
      >
        <XAxis
          type="category"
          dataKey="hour"
          name="hour"
          interval={0}
          tickLine={{ transform: "translate(0, -6)" }}
        />
        <YAxis
          type="number"
          dataKey="index"
          height={10}
          width={80}
          tick={false}
          tickLine={false}
          axisLine={false}
          label={{ value: "Saturday", position: "insideRight" }}
        />
        <ZAxis type="number" dataKey="value" domain={domain} range={range} />
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          wrapperStyle={{ zIndex: 100 }}
          content={renderTooltip}
        />
        <Scatter data={data01} fill="#009688" />
      </ScatterChart>
    </div>
    </CardContent>
  </Card>
  )
}
