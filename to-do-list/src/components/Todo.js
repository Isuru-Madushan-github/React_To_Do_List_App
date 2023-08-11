import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
import moment from 'moment'

const Todo = ({todo,onDelete,onToggle}) => {

  const todoDate=moment(todo.day).format('LL')
  const todoTime=moment(todo.day).format('LT')
  
  const tdDate=new moment(todo.day)
  const dateNow=new moment(new Date())
  const diff=moment.duration(dateNow.diff(tdDate))
  const diffHours=moment.duration(dateNow.diff(tdDate)).as('hours')


  const [days,setDays]=useState(Math.trunc(diffHours/24)*-1)
  const [hours,setHours]=useState(diff._data.hours*-1)
  const [minutes,setMinutes]=useState(diff._data.minutes*-1)
  const [seconds,setSeconds]=useState(diff._data.seconds*-1)

  useEffect(()=>{
    const interval=setInterval(()=>{
      const tdDate=new moment(todo.day)
      const dateNow=new moment(new Date())
      const diff=moment.duration(dateNow.diff(tdDate))
      const diffHours=moment.duration(dateNow.diff(tdDate)).as('hours')
      
      
  
      if(days<=0 && hours<=0 && minutes<=0 && seconds<=0 ){
        clearInterval(interval)
      }else{
        setDays(Math.trunc(diffHours/24)*-1)
        setHours(diff._data.hours*-1)
        setMinutes(diff._data.minutes*-1)
        setSeconds(diff._data.seconds*-1)
      }
      
    },1000)
  })

  const toggleActiveClassname=()=>{
    // if(todo.reminder){
    //   if(days>0 || hours>0 || minutes>0 || seconds>0){
    //     return 'active'
    //   }else{
    //     return 'expired'
    //   }
    // }else{
    //   return 'expired'
    // }

    if(days>0 || hours>0 || minutes>0 || seconds>0){
      if(todo.reminder){
        return 'active'
      }else{
        return ''
      }
    }else{
      return 'expired'
    }
  }

  return (
    <div className={`todo ${toggleActiveClassname()}`} onDoubleClick={()=>onToggle(todo)}>
      <h3>{todo.title} <FaTimes style={{color: 'red' , cursor: 'pointer'}} onClick={()=>{onDelete(todo.id)}}/></h3>
      <p>{todoDate}</p>
      <p>{todoTime}</p>
      <p className='lastPara'><span><Link to={`/todoDetail/${todo.id}`}>View More{'>>'}</Link></span> <span className={(seconds<=0 && minutes<=0 && hours<=0 && days<=0) ? 'expired' : 'active'}>{(seconds<=0 && minutes<=0 && hours<=0 && days<=0) ? 'expired' : 'Time Left:  '}{days>0 && `${days}d `}{hours>0 && `${hours}h `}{ minutes>0 && `${minutes}m `}{(seconds>0 && minutes===0 && hours===0 && days===0) && `${seconds}s`}</span></p>
    </div>
  );
};

export default Todo;
