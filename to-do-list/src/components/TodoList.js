import Todo from './Todo'

const TodoList = ({todoList,onDelete,onToggle}) => {

  return (
    <div className='todo-list'>
        {todoList.map((todo)=>(
            <Todo key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle} />
        ))}
    </div>
  )
}

export default TodoList