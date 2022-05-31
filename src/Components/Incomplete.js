import React from 'react'

function Incomplete({ data, changeStatus, deleteTask }) {

    return (

        < div >
            {console.log("inside incomplete")}
            <h1>Incomplete Task</h1>
            {
                data.filter((obj) => obj.completed !== true).map(taskObj => (
                    <div>
                        <h2 style={{ color: "red" }}>{taskObj.task}</h2>
                        <button className='state-btn' onClick={() => changeStatus(taskObj.id)}>Move to complete</button>
                        <button onClick={() => deleteTask(taskObj.id)}>Delete Task</button>
                    </div>

                ))
            }
        </div >
    )
}

export default React.memo(Incomplete)