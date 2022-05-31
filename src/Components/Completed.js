import React from 'react'

function Completed({ data, changeStatus, deleteTask }) {

    return (

        <div>
            {console.log("inside completed")}
            <h1>Completed task</h1>
            {
                data.map((obj) => (
                    (obj.completed === true) &&
                    <div>
                        <h2 style={{ color: "red" }}>{obj.task}</h2>
                        <button className='state-btn' onClick={() => changeStatus(obj.id)}>Move to Incomplete</button>
                        <button onClick={() => deleteTask(obj.id)}>Delete Task</button>

                    </div>

                ))

            }

        </div>
    )
}



export default React.memo(Completed)