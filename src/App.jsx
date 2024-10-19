import { Cepram } from './components/Cepram.jsx'
import { ElIllia } from './components/ElIllia.jsx'
import { Header } from './components/Header.jsx'
import { Upami } from './components/Upami.jsx'

function App() {

  return (
    <>
      <Header />
      <main className='py-32 flex flex-col gap-40'>
        <Cepram />
        <Upami />
        <ElIllia />
      </main>
    </>
  )
}

export default App
