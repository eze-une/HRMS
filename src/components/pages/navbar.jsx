import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  InputBase,
  alpha,
  Badge,
  Avatar,
} from "@material-ui/core";
import { Search, Mail, Notifications, Cancel } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    container: {
        boxShadow: "10px 10px 66px -19px rgba(0,0,0,0.58)",
        "-webkit-box-shadow": "10px 10px 66px -19px rgba(0,0,0,0.58)",
        "-moz-box-shadow": "10px 10px 66px -19px rgba(0,0,0,0.58)",
    },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    alignItems: "center",
    padding: "5px 10px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  logoLg: {
      display: "block",
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  icons: {
    alignItems: "center",
    display: "flex"  
  },
}));

function Navbar() {
  const classes = useStyles(); 

  return (
    <AppBar className={classes.container} position="fixed" >
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          HRMS
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
       </div>
        <div className={classes.icons}>
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={1} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
