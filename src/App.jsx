import { TopBar, BottomBar } from './components/Navigation'
import Sequence from './View/Sequence'

// import Hacktxt from './components/Hacktxt';

function App() {
  return (
    <>
      <TopBar />
      <main>
        <Sequence />
      </main>
      {/* <Hacktxt/> */}
      <BottomBar />
    </>
  )
}

export default App