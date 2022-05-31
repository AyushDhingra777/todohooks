import React, { useState } from 'react'
import Completed from './Completed'
import Deleted from './Deleted'
import Incomplete from './Incomplete'

function TodoTask() {
    const [todo, setTodo] = useState([
        { id: 1, task: "eat", completed: true },
        { id: 2, task: "sleep", completed: false },
        { id: 3, task: "play", completed: true },

    ])

    const [deletedTask, setDeletedTask] = useState([])

    const changeCompletion = (itemID) => {
        let allTasks = [...todo]
        // console.log(allTasks)
        for (let i = 0; i < allTasks.length; i++) {
            if (allTasks[i].id === itemID)
                allTasks[i].completed = !(allTasks[i].completed)    //changing value(false=>true,true-=>false)
        }
        setTodo([...allTasks])
        console.log(allTasks)
    }
    const handleDelete = (itemID) => {

        let allTask = [...todo]
        let trashTask = todo.find((item) => item.id === itemID)
        console.log("handleDelete called", trashTask)
        setDeletedTask([...deletedTask, trashTask])

        let newArr = allTask.filter((item) => item.id !== itemID)

        console.log("newArr", newArr)
        setTodo([...newArr])
        console.log("todo", todo)


    }
    const handleRetrieve = (task) => {
        setTodo([...todo, task])
        let newArr = deletedTask.filter((obj) => obj.id !== task.id)
        setDeletedTask([...newArr])
    }
    return (
        <div>

            <Completed data={todo} changeStatus={changeCompletion} deleteTask={handleDelete} />
            <Incomplete data={todo} changeStatus={changeCompletion} deleteTask={handleDelete} />
            <Deleted data={deletedTask} retrieveTask={handleRetrieve} />
        </div>
    )
}





export default TodoTask

