import { Analytics } from './components/Analytics'
import { Board } from './components/Boards'
import { Dashboard } from './templates/dashboard'

function App() {
  
  return (
    <Dashboard>
      <h3 className='text-white font-bold text-3xl'>Overview</h3>
      <article className='my-5 grid grid-cols-2 md:grid-cols-3 gap-5'>
        <Analytics num={12} title={'Due'} description={'cards today'}/>
        <Analytics num={78} title={'Studied'} description={'minutes today'}/>
        <Analytics num={12} title={'New'} description={'cards'}/>
      </article>

      <h3 className='text-white font-bold text-3xl mt-10'>Your desks</h3>
      <article className='my-5 grid gap-5 md:grid-cols-2'>
        <Board></Board>
        <Board></Board>
        <Board></Board>
      </article>
      <article className='flex justify-center mt-10'>
        <button className='px-5 py-2 rounded-3xl bg-teal-400 font-bold'>Add a new desk</button>
      </article>
    </Dashboard>
  )
}

export default App
