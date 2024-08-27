import TopBar from './components/TopBar'
import Sequence from './components/Sequence'
import BottomBar from "./components/BottomBar";

function App() {
  return (
    <>
      <TopBar />
      {/*  so modal is showing when it's realtive its a css problem */}
      <main className='relative'>
        <Sequence />
      </main>
      <BottomBar />
    </>
  )
}

export default App