import React from "react";
import Chart from "../DashBoard/admin Dashboard/charts";
import FeaturedInfo from "../DashBoard/admin Dashboard/featuredInfo";
import { userData } from "../DashBoard/admin Dashboard/demmyData";
import WidgetSm from "../DashBoard/admin Dashboard/WidgetSm";
import { makeStyles } from "@material-ui/core";
import DetailInfo from "../DashBoard/admin Dashboard/DetailInfo";
import WidgetLg from "../DashBoard/admin Dashboard/WidgetLg";

const useStyles = makeStyles((theme) => ({
  home: {
    flex: 4,
  },
  widget: {
    display: "flex",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.home}>
          <FeaturedInfo />
          <Chart
            title="Attendance"
            data={userData}
            dataKey="Active User"
          />
          <DetailInfo></DetailInfo>
          <div className={classes.widget}>
            <WidgetSm />
            <WidgetLg />
          </div>
    </div>
  );
}
