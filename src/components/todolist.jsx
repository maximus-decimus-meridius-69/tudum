import React,{useState} from "react";

function TodoList(){
    const[tasks,setTasks]=useState([])
    const[input,setInput]=useState("")

    const addTodo=(e)=>{
        e.preventDefault()
        if(input.trim()==="") return;
        setTasks([...tasks,{id:Date.now(),text:input}])
        setInput("")
    }

    const deleteTodo=(id)=>{
        setTasks(tasks.filter(task=>task.id!==id))
    }

    return(
        <div>
            <form onSubmit={addTodo}>
                <input type="text" placeholder="Enter the task" value={input} onChange={(e)=>setInput(e.target.value)}/>    
                <button type="submit">Add</button>
            </form>

            {tasks.length===0 ? (
                <p>No Tasks</p>
            ):(
                <ul>
                    {tasks.map((task)=>(
                        <li key={task.id}>{task.text}{" "} <button onClick={()=>deleteTodo(task.id)}>Delete</button></li>
                    )
                    )}
                </ul>
            )
            }
        </div>
    )
}

export default TodoList;