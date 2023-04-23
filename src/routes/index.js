import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Blog from "../pages/Blog";
import About from "../pages/Contact";
import PageNotFound from "../pages/PageNotFound";
import Project from "../pages/Project/Project";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/shop", component: Shop },
    { path: "/project", component: Project },
    { path: "/blog", component: Blog },
    { path: "/contact", component: About },
    { path: "*", component: PageNotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
