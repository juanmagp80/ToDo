import React from 'react'
import { useState } from 'react'

const Tasklist = () => {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')
    const pendingTasks = tasks.filter(task=>!task.completed).length

    const handleAddTask = () => {
        setTasks([...tasks, {title: newTask, completed: false}])
        setNewTask('')

        const handleEditTask = (index) => {
            const taskToEdit = tasks[index]
            // Aquí puedes implementar la lógica para editar la tarea
          }
          
          const handleDeleteTask = (index) => {
            const newTasks = [...tasks]
            newTasks.splice(index, 1)
            setTasks(newTasks)
          }
    }
  return (
    <div className='flex flex-col w-full'>
    <div className='flex justify-between mt-8 w-full'>   
    <p>Total de tareas: {tasks.length}</p>
    <p>Tareas pendientes: {pendingTasks}</p>


    </div>
    <h1 className='text-2xl mt-6 font-bold mb- text-center'>Agregar Tarea</h1>
    <div className='mt-4'>
        <input className='border-2 border-gray-300 rounded-md p-2 w-96' 
        type='text' placeholder='Nueva tarea'
        value={newTask}
        onChange={e => setNewTask(e.target.value)}/>
        <button className='ml-8 p-2 bg-blue-500 text-white rounded-md'
        onClick={handleAddTask}>Agregar</button>
      </div>
      <ul className='mt-8'>
      {tasks.map((task, index) => (
        <li key={index} className='flex items-center justify-between'>
        <div className='flex items-center'>
          <input type='checkbox' checked={task.completed}
          onChange={e => {
            const newTasks = [...tasks]
            newTasks[index].completed = e.target.checked
            setTasks(newTasks)
          }}/>
                    <p className='ml-5'>{task.title}</p>
        </div>
      
      
      <div className='justify-end'>
      <button className='mr-2 bg-yellow-500 text-white rounded-md p-1'
      onClick={() => handleEditTask(index)}>Editar</button>
        <button className='bg-red-500 text-white rounded-md p-1'
        onClick={()=> handleDeleteTask(index)}>Borrar</button>
        </div>

        </li>
      ))}   
        </ul>


      
    </div>
  )
}

export default Tasklist
