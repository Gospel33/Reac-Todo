import React, { useEffect, useRef, useState } from 'react'
import TodoItems from './TodoItems'

const TodoForm = () => {

    const [todoList, setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) : [])

    const inputRef = useRef()

    const add = () => {
        const inputText = inputRef.current.value.trim() 

        if (inputText === "") {
            return null
        }
        
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }
        setTodoList((prev) => [...prev, newTodo])
        inputRef.current.value = ""
    }

    const deleteTodo = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id)
        })
    }

    // const editTodo = (id) => {
    //     setTodoList((prevTodos) => {
    //         return prevTodos.map((todo) => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo)
    //     })
    // }

    const toggle = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo
            })
        })
    }

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todoList))
        
    }, [todoList])

  return (
    <div className='bg-gray-700 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

        <div className='flex items-center mt-7 gap-2'>
            <h1 className='text-3xl font-semibold text-white'>To-Do List</h1>
        </div>

        <div className='flex items-center my-7 bg-gray-400 rounded-full'>
            <input ref= {inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-500' type="text" placeholder='Add Your Task' />
            <button onClick = {add} className='border-none bg-gray-800 text-white w-32 h-14 text-lg font-medium cursor-pointer rounded-full'>ADD TASK</button>
        </div>

        <div>
            {todoList.map((item, index) => {
                return <TodoItems key = {index} text = {item.text} id = {item.id} isComplete = {item.isComplete} deleteTodo = {deleteTodo} toggle = {toggle}/>
            })}
        </div>
    </div>
  )
}

export default TodoForm