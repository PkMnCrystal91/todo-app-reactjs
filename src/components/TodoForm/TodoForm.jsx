import { useForm } from "react-hook-form"
import { useStore } from '../../hooks/store'
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid";

export const TodoForm = () => {

    const {register, handleSubmit, formState:{ errors } } = useForm();
    const addTodo = useStore((state) => state.addTodo);
    const navigate = useNavigate();

    const onSubmit = ({title, description, person, date}) => { 

         
        addTodo({id:uuidv4(),title, description, person, date, done:false})
        navigate('/')
    }

  return (
    <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
      <form className="flex flex-col rounded-l-xl" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="font-serif mb-1 text-xl font-medium text-center text-white md:text-left">Please Enter Info</h2>
          <input className="mb-2 p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center " type="text" placeholder="Title" {...register('title', { required: true })} />
          <input className="mb-2 p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center " type="text" placeholder="Description" {...register('description', { required: true })} />
          <input className="mb-2 p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center " type="text" placeholder="Person" {...register('person', { required: true })} />
          <input className="mb-2 p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center " type="text" placeholder="Date To Acomplish" {...register('date', { required: true })} />
          <button className="mb-2 px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500" type="submit">Submit</button>

      </form>

    </div>
  )
}
