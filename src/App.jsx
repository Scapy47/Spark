import TopBar from './components/TopBar'
import Sequence from './components/Sequence'
import BottomBar from "./components/BottomBar";
import Hacktxt from './components/Hacktxt';

function App() {
  return (
    <>
      <TopBar />
      {/* <main>
        <Sequence />
      </main> */}
      <Hacktxt/>
      <BottomBar />
    </>
  )
}

export default App