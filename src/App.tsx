import { Board } from './components/Boards'
import { Dashboard } from './templates/dashboard'

function App() {
  
  return (
    <Dashboard>
      <h3 className='text-white font-bold text-3xl'>Overview</h3>
      <article className='mt-10'>
        
      </article>

      <h3 className='text-white font-bold text-3xl'>Your desks</h3>
      <article className='my-5 grid gap-5 md:grid-cols-2'>
        <Board></Board>
        <Board></Board>
        <Board></Board>
      </article>
      <button className='px-5 py-2 rounded-3xl bg-teal-500'>Add a new desk</button>
    </Dashboard>
  )
}

export default App
