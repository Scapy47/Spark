import { TopBar, Dock } from './components/Navigation'
import Sequence from './View'
import {
  createHashRouter,
  Link,
  RouterProvider,
} from "react-router-dom";


const router = createHashRouter([
  {
    path: "/",
    element: <Sequence />,
  },
  {
    path: "/hello-world",
    element: <span className="text-8xl">hello world <Link replace to={"/"}>HOME</Link></span>,
  },
]);

function App() {
  return (
    <>
      <TopBar />
      <main>
        <RouterProvider router={router} />
      </main>
      <Dock />
    </>
  )
}

export default App