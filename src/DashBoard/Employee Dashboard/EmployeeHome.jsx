import React from "react";
import WidgetSm from "../admin Dashboard/WidgetSm";
import { makeStyles } from "@material-ui/core";
import DetailInfo from "../admin Dashboard/DetailInfo";
import WidgetLg from "../admin Dashboard/WidgetLg";
import TaskProgress from "./TaskProgress";
import LeaveStatus from "./LeaveStatus";

const useStyles = makeStyles((theme) => ({
  home: {
    flex: 4,
  },
  widget: {
    display: "flex",
  },
}));

export default function EmployeeHome() {
  const classes = useStyles();

  return (
    <div className={classes.home}>
  <TaskProgress />
  <LeaveStatus />
  {/* <DetailInfo></DetailInfo>
  <div className={classes.widget}>
    <WidgetSm />
    <WidgetLg />
  </div> */}
</div>
  ) 
}
