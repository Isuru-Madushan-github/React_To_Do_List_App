import {useState} from 'react'
import Button from "./Button";

const AddForm = ({onAdd}) => {

  const[title,setTitle]=useState('')
  const[day,setDay]=useState('')
  const[reminder,setReminder]=useState(false)


  const onSubmit=(e)=>{
    e.preventDefault()

    if(!title){alert('Please add a title')}

    onAdd({title,day,reminder})

    setTitle('')
    setDay('')
    setReminder(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Day & time</label>
        <input type="datetime-local" value={day} onChange={((e)=>setDay(e.target.value))}/>
      </div>
      <div className="form-group-with-checkbox">
        <label>Reminder</label>
        <input type="checkbox" checked={reminder} onChange={(e)=>setReminder(e.target.checked)}/>
      </div>
      <Button className='bg' text='Save'/>
    </form>
  );
};

export default AddForm;
