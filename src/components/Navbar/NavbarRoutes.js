import { v4 as uuidv4 } from "uuid";

const navBarRoutes = [
  {
    id: uuidv4(),
    componentRoute: "/",
    componentName: "Home",
  },
  {
    id: uuidv4(),
    componentRoute: "/about",
    componentName: "About",
  },
  {
    id: uuidv4(),
    componentRoute: "/contact",
    componentName: "Contact",
  },

  {
    id: uuidv4(),
    componentRoute: "/dashboard",
    componentName: "Dashboard",
  },

  {
    id: uuidv4(),
    componentRoute: "/register",
    componentName: "Join Us",
  },
];

export default navBarRoutes;
