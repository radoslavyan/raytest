import CreateProject from "../components/Project/CreateProject";
import IndexProjects from "../components/Project/IndexProjects";
import CreateTimeristraion from "../components/Timeregistration/CreateTimeregistration";
import IndexTimeregistrations from "../components/Timeregistration/IndexTimeregistrations";
import TimeloggerHomePage from "../views/TimeloggerHomePage";

const routes = [
    {
        path: "/",
        exact: true,
        component: TimeloggerHomePage,
    },
    {
        path: "/projects",
        exact: true,
        component: IndexProjects,
    },
    {
        path: "/projects/create",
        exact: true,
        component: CreateProject,
    },
    {
        path: "/timeregistrations",
        exact: true,
        component: IndexTimeregistrations,
    },
    {
        path: "/timeregistrations/create",
        exact: true,
        component: CreateTimeristraion,
    },

];

export default routes;