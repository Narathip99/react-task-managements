import './AddForm.css';
export default function AddForm(props){
  const {title,setTitle,saveTask,editId} = props
  return(
    <>
      <h2>TaskManagement</h2>
      <form onSubmit={saveTask}>
        <div className="form-control">
          <input type="text" name="" className="text-input" value={title} onChange={(e)=>setTitle(e.target.value)}/>
          <button type="submit" className='btn-submit'>
            {editId ?"Update":"AddTask"}
          </button>
        </div>
      </form>
    </>
  )
}