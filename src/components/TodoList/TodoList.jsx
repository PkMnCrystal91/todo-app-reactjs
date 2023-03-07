import { useStore } from '../../hooks/store'
import { Link } from 'react-router-dom' 
import { TodoItem } from '../TodoItem/TodoItem'






export const TodoList = () => {

    const tasks = useStore((state) => state.todos)    

  return (
    <div className='bg-zinc-800 p-2 mx-6 rounded-2xl'>
      <div className='flex items-center flex-col rounded-l-xl'>
        <Link className='w-full text-center mb-2 px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-slate-800 hover:text-white duration-500' to={`add`}>Add New Todo</Link>
        
        {
            tasks.map((payload) => (
                <TodoItem key={payload.id} todo={payload}/> 
            ))
        }
      </div>
          
    </div>
  )
}

