import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'
import DevFlask from './components/DevFlask'

function App() {
  return (
    <>

      <div className="flex flex-col h-dvh">
        <TopBar />
        <main className='grid h-full overflow-y-scroll'>
          <section className="w-full h-full border-solid border-2 border-sky-300 flex justify-center items-center">
            <DevFlask size={"100px"}/>
          </section>
          <section className="w-full h-full border-solid border-2 border-sky-300  flex justify-center items-center">
            <DevFlask size={"100px"}/>
          </section>

        </main>
        <BottomBar />
      </div>

    </>
  )
}

export default App
