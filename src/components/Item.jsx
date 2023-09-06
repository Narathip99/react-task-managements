import './Item.css'
import { BiTrash } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";

export default function Item(props){
  const {data,deleteTask,editTask} = props
  return(
    <div className='list-item'>
      <p className='title'>{data.title}</p>
      <div className="btn-container">
        <BiTrash className='btn-action' onClick={()=>deleteTask(data.id)} />
        <BiEdit className='btn-action' onClick={()=>editTask(data.id)}/>
      </div>
    </div>
  )
}