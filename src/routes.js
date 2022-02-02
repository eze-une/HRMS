 
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Home from "views/Home";
import EmployeeHome from "DashBoard/Employee Dashboard/EmployeeHome";


const dashboardRoutes = [
  {
    path: "/user",
    name: "Add New Admin",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/admindashboard",
    name: "DashBoards",
    icon: "nc-icon nc-chart-pie-35",
    component: Home,
    layout: "/admin",
  },
  {
    path: "/employeedashboard",
    name: "Employee DashBoard",
    icon: "nc-icon nc-chart-pie-35",
    component: EmployeeHome,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Employee DashBoard",
    icon: "nc-icon nc-chart-pie-35",
    component: EmployeeHome,
    layout: "/admin",
  },
 
];

export default dashboardRoutes;
