import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import { Computer } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: "auto",
      width: theme.spacing(30),
      height: theme.spacing(13),
      marginTop: theme.spacing(3)
    },
  },
  cardContent: {
    "-webkit-box-shadow": "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
        boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)"
  },
  cardItems: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  icon: {
    fontSize: "large"
  },
  text2: {
    fontSize: "20px",
    color: "#555",
  },
}));

export default function Deposits() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.cardContent}>
        <CardContent className={classes.cardItems}>
          <Typography >
           <Computer color="primary" fontSize={classes.icon}/>
          </Typography>
          <Typography variant="h6"> Active P.</Typography>
        </CardContent>
        </Card>
        <Card className={classes.cardContent}>
        <CardContent className={classes.cardItems}>
          <Typography >
           <Computer color="primary" fontSize={classes.icon}/>
          </Typography>
          <Typography variant="h6"> Pending P.</Typography>
        </CardContent>
        </Card>
        <Card className={classes.cardContent}>
        <CardContent className={classes.cardItems}>
          <Typography >
           <Computer color="primary" fontSize={classes.icon}/>
          </Typography>
          <Typography variant="h6"> Finished P.</Typography>
        </CardContent>
        </Card>
        <Card className={classes.cardContent}>
        <CardContent className={classes.cardItems}>
          <Typography >
           <Computer color="primary" fontSize={classes.icon}/>
          </Typography>
          <Typography variant="h6"> Planned P.</Typography>
        </CardContent>
        </Card>
    </div>
  );
}
