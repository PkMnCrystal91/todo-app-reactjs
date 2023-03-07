import { Route, Routes } from 'react-router-dom'
import { TodoList, UpdateForm, } from '../components/index'
import { TodoForm } from '../components/TodoForm/TodoForm'

export const AppRouter = () => {
    return (
      <>
          <Routes>
  
              <Route path='/' element={ <TodoList /> } />
              <Route path='add' element={ <TodoForm /> }/>
              <Route path='edit/:id' element={ <UpdateForm /> } />
  
          </Routes>
      </>
    )
  }