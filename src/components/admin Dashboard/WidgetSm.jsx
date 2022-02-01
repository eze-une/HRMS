import React, { useCallback, useState } from "react";
import { Card, makeStyles, Typography } from "@material-ui/core";
import { PieChart, Pie, Sector } from "recharts";


const data = [
  { name: "Casual Leave", value: 400 },
  { name: "Sick Leave", value: 300 },
  { name: "Paid Leave", value: 500 },
  { name: "Unpaid Leave", value: 200 }
];

const useStyles = makeStyles((theme) => ({
  conta: {
    flex: 1,
    margin: "20px",
    padding: "20px",
    justifyContent: 'center',
    alignContent: 'center',
    "-webkit-box-shadow": "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
    boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
  },
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
  piechart: {
    margin: "auto",
  }
}));

const renderActiveShape = (props: any) => {

  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default function WidgetSm() {
  const classes = useStyles();

  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <Card className={classes.container}>
      <Typography variant="h5" className={classes.title}>
          Employee Leave Information
        </Typography>
      <PieChart className={classes.piechart} width={500} height={500}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={200}
        cy={200}
        innerRadius={80}
        outerRadius={100}
        fill="#009688"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
    </Card>
  );
}
