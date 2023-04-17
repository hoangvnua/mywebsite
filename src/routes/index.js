import { HeaderOnly } from "../components/Layouts";

import Home from "../pages/Home";
import Blog from "../pages/Blog";
import About from "../pages/Contact";
import PageNotFound from "../pages/PageNotFound";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/blog", component: Blog },
    { path: "/contact", component: About },
    { path: "*", component: PageNotFound, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
