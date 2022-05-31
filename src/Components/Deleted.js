import React from 'react'

function Deleted({ data, retrieveTask }) {
    return (
        <div>
            {console.log("Inside Deleted")}
            <h1>Deleted Task</h1>
            {
                data.map((obj) => (
                    <div>
                        <h2 style={{ color: "red" }}>{obj.task}</h2>
                        <button onClick={() => retrieveTask(obj)}>Retrieve</button>
                    </div>

                ))
            }
        </div>
    )
}

export default React.memo(Deleted)