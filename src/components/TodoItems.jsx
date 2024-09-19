import React from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { BiCheckCircle } from 'react-icons/bi'
import { BsFillTrashFill } from 'react-icons/bs'

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div onClick = {() => {toggle(id)}} className='flex items-center my-3  gap-2 cursor-pointer w-[400px] h-6'>

        {/* <div onClick ={()=> {}} className='w-20 h-14 flex items-center bg-blue-100 text-9xl rounded-full'>
            <BiCheckCircle className='text-7xl cursor-pointer font-[900] mt-3 text-white'/>
        </div> */}
        
        <p className= {`text-white ml-1 mt-2 text-md w-full  ${isComplete ?  "line-through" : ""}`}> {text} </p>
        <div className='flex items-center gap-x-4 mt-3 ml-[200px]'>
            <AiFillEdit className='text-xl  cursor-pointer text-white'/>
            <BsFillTrashFill onClick = {() => {deleteTodo(id)}} className='text-xl cursor-pointer text-red-400'/>
        </div>


    </div>
  )
}

export default TodoItems