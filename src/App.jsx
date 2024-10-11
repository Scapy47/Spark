import { TopBar, BottomBar } from './components/Navigation'
import { Sequence } from './View'
// import Hacktxt from './components/Hacktxt'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Sequence />,
  },
  {
    path: "/hello-world",
    element: <span className="text-8xl">hello world</span>,
  },
]);

function App() {
  return (
    <>
      <TopBar />
      <main>
        <RouterProvider router={router} />
      </main>
      <BottomBar />
    </>
  )
}

export default App