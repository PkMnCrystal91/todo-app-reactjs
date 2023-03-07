import { Link } from 'react-router-dom' 
import { useStore } from '../../hooks/store'
import { CompletedList } from '../CompletedList/CompletedList';

export const TodoItem = ({todo}) => {

    const deleteTodo = useStore((state) => state.removeTodo);
    const toogleTodo = useStore((state) => state.toggleTodo)

  return (     
    <>
      <div className='flex flex-col text-white items-center justify-center'>
        <div className={`flex flex-col items-center mb-3 ${ (todo.done) ? 'line-through text-red-900' : '' }`}>
          <span className='mb-2 text-center'>TITLE 
          <h2 className=''>{todo.title}</h2>
          </span>
          <span className='mb-2 text-center'>
           DESCRIPTION <h2 className='text-center'>{todo.description}</h2>
          </span>
          <span className='mb-2 text-center'>
            PERSON
            <h2 className='text-center'>{todo.person}</h2>
          </span>
          <span className='mb-2 text-center'>

           DUE DATE <h2>{todo.date}</h2>
          </span>
          <div className='flex flex-row items-center gap-x-3'>
            <span>FINISHED :</span>
            <input type="checkbox" checked={todo.done} onChange={() => toogleTodo(todo.id)}/>
          </div>
        </div>
        <div className='flex flex-row gap-x-2'>
          <Link className='mb-2 px-5 py-3 text-xs rounded-md text-zinc-800 bg-teal-600 hover:bg-teal-700 hover:text-white duration-500' to={`edit/${todo.id}`}>Edit</Link>
          <button className='mb-2 px-5 py-3 text-xs rounded-md text-zinc-800 bg-red-600 hover:bg-red-700 hover:text-white duration-500' onClick={() => deleteTodo(todo.id)}>Delete</button>      
        </div>
      </div>  
    </>
  )
}
