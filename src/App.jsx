import { Cepram } from './components/Cepram'
import { ElIllia } from './components/ElIllia'
import { Header } from './components/Header'
import { Upami } from './components/Upami'

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
