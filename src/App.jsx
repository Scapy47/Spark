import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'
import DevFlask from './components/DevFlask'
import Sequence from './components/Sequence'
import "./imports.css"

function App() {
  return (
    <>
      <TopBar />
      <main className='grid grid-cols-4 grid-rows-6 h-full overflow-y-scroll'>
        <section className="col-span-3 row-span-3 border-solid border-2 border-sky-300 flex justify-center items-center">
          <DevFlask size={"100px"} />
          <Sequence/>
        </section>
        <section className="row-span-3 border-solid border-2 border-sky-300  flex justify-center items-center">
          <DevFlask size={"80px"} />
        </section>
        <section className='row-span-3 col-span-4 border-2 border-sky-300 flex flex-col overflow-y-scroll py-2 px-4'>
          {/* <Sequence/> */}
        </section>
      </main>
      <BottomBar />
    </>
  )
}

export default App
