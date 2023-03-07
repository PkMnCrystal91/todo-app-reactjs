import { useForm } from "react-hook-form"
import useContactFormStore from "../../hooks/useContactFormStore"
import { Link } from 'react-router-dom' 
import { useStore } from '../../hooks/store'
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

export const UpdateForm = () => {

    const [info, setInfo] = useState({
      id:'',
      title:'',
      person:'',
      description:'',
      date:'',
      done: ''
    })

    console.log(info)

    const navigate = useNavigate();
    const params = useParams();
    const updateTodo = useStore((state) => state.updateTodo);
    const tasks = useStore((state) => state.todos) 
    
    

    useEffect(() => {
      if(params.id){
        setInfo(tasks.find((task) => task.id === params.id))
      }
    }, [params,tasks])


    const onInputChange = (e) => {
      setInfo({
        ...info,
        [e.target.name] : e.target.value
      })
    }

    const onSubmit = (event) => {   
      event.preventDefault(); 
      
      const {id} = params;
      updateTodo(id, info.title, info.description, info.person, info.date, info.done)
      navigate("/")
      
    }

  return (
    <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
      <form className="flex flex-col rounded-l-xl" onSubmit={onSubmit}>
          <input className="mb-2 p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center " type="text" name="title"  placeholder="Title" value={info.title} onChange={onInputChange}/>
          <input className="mb-2 p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center " type="text" name='description'  placeholder="Description" value={info.description} onChange={onInputChange} />
          <input className="mb-2 p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center " type="text" name="person"  placeholder="Person" value={info.person} onChange={onInputChange} />
          <input className="mb-2 p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center " type="text" name="date"  placeholder="Date" value={info.date} onChange={onInputChange} />
          <div className="flex flex-row justify-between text-white">
            <button type="submit">Save</button>
            <Link to='/' >Cancel</Link>

          </div>
      </form>

    </div>
  )
}
