import Users from "../pages/users";
import MyInfo from "../pages/my-info";

export const homeRoutes = [
    {
        path: '/app/home',
        element: Users
    },
    {
        path: '/app/users',
        element: Users
    },
    {
        path: '/app/my-info',
        element: MyInfo
    }
]

