import {
    createHashRouter,
    RouterProvider
} from "react-router-dom";
import App from "./App";
import Errorpage from "./Errorpage";

const Paths = createHashRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/test",
    }
], {
    future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
    },
})

export default function Routes() {
    return (
        <RouterProvider
            router={Paths}
            fallbackElement={<Errorpage />}
            future={{
                v7_startTransition: true,
            }}
        />
    )
}