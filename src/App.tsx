import { useState } from 'react'
import { Analytics } from './components/Analytics'
import { Board } from './components/Boards'
import { Dashboard } from './templates/dashboard'

function App() {

  const [boards, setBoards] = useState([])

  const addBoard = ()=>{
    const newElement = {title:'Title', description:'This is a new board!', newCards:10,learnCards:10,reviewCards:10}
    setBoards(oldArray => [...oldArray, newElement]);
  }

  return (
    <Dashboard>
      <h3 className='text-white font-bold text-3xl'>Overview</h3>
      <article className='my-5 grid grid-cols-2 md:grid-cols-3 gap-5'>
        <Analytics num={12} title={'Due'} description={'cards today'}/>
        <Analytics num={78} title={'Studied'} description={'minutes today'}/>
        <Analytics num={12} title={'New'} description={'cards'}/>
      </article>

      <h3 className='text-white font-bold text-3xl mt-10'>Your desks</h3>
      <article className='flex flex-col sm:flex-row gap-4 sm:justify-between items-center pb-5 border-b-2 mb-10 border-slate-600 mt-5'>
        <button onClick={()=>addBoard()} className='px-5 py-2 rounded-3xl bg-teal-400 text-sm hover:bg-teal-500'>Add a new desk</button>
        <p className='text-slate-300 text-md'>{boards.length} Boards in total</p>
      </article>
      <article className='my-5 grid gap-5 md:grid-cols-2'>
        {
          (boards.length === 0)
          ?
          <p className='text-white'>There is not boards! <button onClick={()=>addBoard()} className='text-teal-500 underline'>create one</button></p>
          :
          boards.map( el => {
            return <Board title={el.title} description={el.description} newCards={el.newCards} learnCards={el.learnCards} reviewCards={el.reviewCards}  />
          })
        }
      </article>
      
    </Dashboard>
  )
}

export default App
