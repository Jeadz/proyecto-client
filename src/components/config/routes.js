import { LayoutGeneral } from "../layouts/LayoutGeneral";
import { Admin } from "../pages/admin/Admin";
import { SignIn } from "../pages/General/SignIn";
import { Home } from "../pages/General/Home";
import { Contact } from "../pages/General/Contact";
import { NotFound } from "../pages/General/NotFound";

const AdminRoutes = [
    { path: "/admin", component: Admin, layout: LayoutGeneral},
    {path:"/admin/sign-in", component: SignIn, layout:LayoutGeneral},
];

const GeneralRoutes = [
    {path:"/", component: Home, layout:LayoutGeneral},
    {path:"/contact", component: Contact, layout:LayoutGeneral},
    {path:"*", component: NotFound, layout:LayoutGeneral},
];

const allRoutesProject = [...AdminRoutes, ...GeneralRoutes];
export default allRoutesProject;