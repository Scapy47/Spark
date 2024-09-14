import TopBar from './components/TopBar'
import Sequence from './components/Sequence'
import BottomBar from "./components/BottomBar";

function App() {
  return (
    <>
      <TopBar />
      <main>
        <Sequence />
      </main>
      <BottomBar />
    </>
  )
}

export default App