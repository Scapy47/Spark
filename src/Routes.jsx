import {
    createHashRouter,
    RouterProvider
} from "react-router-dom";
import App from "./App";

const Paths = createHashRouter([
    {
        path: "/",
        element: <App/>
    }
])

export default function Routes() {
    return <RouterProvider router={Paths} />
}