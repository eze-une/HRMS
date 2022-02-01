import SignIn from "./components/login/SignIn";
import SignUp from "./components/login/SignUp";

import Home from "./components/admin Dashboard/Home";
import EmployeeTrainingPage from "./components/Training/EmployeeTrainingPage";
import EmployeeHome from "./components/Employee Dashboard/EmployeeHome";
import { Grid, makeStyles } from "@material-ui/core";
import Navbar from "./components/pages/navbar";
import Sidebar from "./components/pages/sidebar";
import SideBar from "./components/sidebar";

const useStyles = makeStyles((theme) => ({
  feed: {
    paddingTop: theme.spacing(6),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      {/* <SignIn /> */}
     {/* <SignUp /> */}

      {/* <Navbar /> */}
      {/* <Grid container>
        <Grid item sm={2}>
          <Sidebar />
        </Grid>
        <Grid item className={classes.feed} sm={10}>
          <Home /> */}
           {/* <EmployeeHome /> */}
      {/* <EmployeeTrainingPage /> */}
        {/* </Grid>
    </Grid> */}
    <SideBar />

    </div>
  );
}

export default App;
