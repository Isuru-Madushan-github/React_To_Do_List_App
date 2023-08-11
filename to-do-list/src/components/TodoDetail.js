import { useParams, useNavigate , Link} from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import moment from "moment"

const TodoDetail = () => {
  const param = useParams()
  const navigate = useNavigate()

  const [todo, setTodo] = useState({})
  const[loading,setLoading]=useState(true)

  useEffect(() => {
    axios
      .get(`http://localhost:5000/todos/${param.id}`)
      .then((res) => {
        setTodo(res.data)
        setTimeout(()=>{
            setLoading(false)
        },500);
        
      })
      .catch((e) => {
        if (e.response.status === 404) {
          navigate("/")
        }
      })
  }, [])

  const todoDate=moment(todo.day).format('LL')
  const todoTime=moment(todo.day).format('LT')

  return (
    loading ? <h3>Loading............</h3> : 
    <div className="todo">
      <h3>{todo.title}</h3>
      <p>{todoDate}</p>
      <p>{todoTime}</p>
      <p>Reminder :{todo.reminder ? 'true' : 'false'}</p>
      <Link to={'/'}>{'<<'}Go Back</Link>
    </div>
  )
}

export default TodoDetail;
