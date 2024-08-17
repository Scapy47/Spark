import TopBar from './components/TopBar'
import Sequence from './components/Sequence'
import BottomBar from "./components/BottomBar";

function App() {
  return (
    <>
      <TopBar />
      <main className='relative bg-red-500 h-full'>
        <Sequence />
      </main>
      <BottomBar />
    </>
  )
}

export default App