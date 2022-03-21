import React, { useState} from 'react'
import './App.css'
function App(){
  const [value,setValue]=useState('')
  const [todo,setTodo]=useState([{todo:"todo",status:false,update:false}])
  const [green,setGreen]=useState([{todo:"todo",status:false,update:false}])
  const [red,setRed]=useState([{todo:"todo",status:false,update:false}])
  const [all,setAll]=useState([{todo:"todo",status:false,update:false}])
  const [completed,setCompleted]=useState(false)
  const [pending,setPending]=useState(false)
  


  const handleChange=(e)=>{
      setValue(e.target.value)
  }
  const handleSubmit=(e)=>{
    const list=[...todo,{todo:value,status:false,update:false}]
    setTodo(list)
    setAll(list)
    setGreen(list)
    setRed(list)
    console.log(list)
    setValue('')
  }
  
  
  function Update(props){
    const [newvalue,setnewvalue]=useState('')
    console.log("update function")
    
    const handlenewvalue=(e)=>{
      console.log('val')
      setnewvalue(e.target.value)
    }
    
    const handleEdit=(e)=>{
      const arr=[...todo]
      arr[e.target.name].todo=newvalue
      arr[e.target.name].update=false
      arr[e.target.name].status=false
      console.log("arr")
      setTodo(arr)
      setAll(arr)
      setGreen(arr)
      setRed(arr)
    }
    
    return(
      <div className="row" style={{"display":"flex","paddingLeft":"5px","zIndex":"1000 !important"}}>
        {/* <input type="button" id="button" name={props.index} value="save" onClick={handleEdit}/> */}
        <input type="text" id="fname" name="todo  " onChange={handlenewvalue} />
        <input type="button" id="button" name={props.index} value="save" onClick={handleEdit}/>      
      </div>
    )
  }
  
  const handleUpdate=(e)=>{
    const arr=[...todo]
    console.log(arr[e.target.name].update)
    if(arr[e.target.name].update){
      arr[e.target.name].update=false
    }
    else{
      arr[e.target.name].update=true
    }
    setTodo(arr)
    setAll(arr)
    setGreen(arr)
    setRed(arr)
  }
  const handleIndex=(e)=>{
    const arr=[...todo]
    if(arr[e.target.name].status){
      arr[e.target.name].status=false
    }
    else{
      arr[e.target.name].status=true
    }
    setTodo(arr)
    setAll(arr)
    setGreen(arr)
    setRed(arr)
    console.log(todo)
  }
  const handleDelete=(e)=>{
    const arr=[...todo]
    delete arr[e.target.name]
    console.log(arr)
    setTodo(arr)
    setAll(arr)
    setGreen(arr)
    setRed(arr)
  }
  // const showAll=()=>{
  //   console.log('show',all)
  //   setTodo(todo)
  // }
 
   const Completed=()=>{
    
     const arr=[...all]
     var ar=[]
     arr.forEach(val=>{
       if (val.status){
         ar.push(val)
       }
     })
    //  document.getElementById("check").checked=true
     console.log(ar)
     setGreen(ar)
     setTodo(green)
     console.log('completed',green)
   }
   const Pending=()=>{
     const arr=[...all]
     var ar=[]
     arr.forEach(val=>{
       if(!val.status){
         ar.push(val)
       }
     })
     setRed(ar)
     console.log('pending',red)
     setTodo(red)
    }
    // const showAll=()=>{
    //   console.log("showall",all)
    //   setTodo(all)
    // }
  return(
    <div className="body">
      <div className="form">
        <input className="form-control" type="text" placeholder="enter the task to do" onChange={handleChange}/>
        <button className=" btn btn-primary button" type="submit" onClick={handleSubmit}>Add task</button>
      </div>
      <div className="form">
        <button className=" btn btn-primary button" type="submit" onClick={()=>{setTodo(all)}}>show all</button>
        <button className="btn btn-primary  button" type="submit" onClick={Completed}>show completed</button>
        <button className="btn btn-primary button" type="submit" onClick={Pending} >pending</button>
      </div>
      {/* {pending?<Pending/>:""} */}
      <div>
        {todo.map((task,index)=>{
          // console.log('all',all)
          if(task!==undefined){
          return(
            <ul className="form tasks">
              <li  style={{color:task.status?"green":"red"}}>{task.todo}</li>
              <input  className=" checkbox " type="checkbox" checked={task.status} name={index} onClick={handleIndex} />
              <input className="btn btn-success button" type="button" name={index} onClick={handleUpdate} value="update"/>
              {task.update?<Update index={index}/>:""}
              <input className="btn btn-danger button" type="button" name={index} onClick={handleDelete}  value="delete"/>             
            </ul>

          )
          }
      })}
      </div>
    </div>
  )
}
export default App