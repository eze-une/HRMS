import React from 'react';
import Chart from './charts';
import FeaturedInfo from './featuredInfo'
import {userData} from "../../demmyData"
import WidgetSm from './WidgetSm';
import { makeStyles } from '@material-ui/core';
import DetailInfo from './DetailInfo';
import WidgetLg from './WidgetLg';

const useStyles = makeStyles((theme) => ({
   home: {
     flex: 4
   },
   widget: {
    display: "flex",
   }
}))

export default function Home() {
  const classes = useStyles();

  return <div className={classes.home}>
      <FeaturedInfo />
      <Chart title="Employee Report" data={userData} dataKey="Active User" grid  />
        <DetailInfo></DetailInfo>
        <div className={classes.widget}>
          <WidgetSm />
          <WidgetLg />
        </div>
       
  </div>
}
