import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = ({onAddBtnClick,btnToggle}) => {

  const location=useLocation();

  return (
    <header>
        <h1>My Todo List</h1>
        {location.pathname==='/' && (btnToggle ? <Button text='Cancel' onAddBtnClick={onAddBtnClick} backgroundColor='red'/> : <Button onAddBtnClick={onAddBtnClick}/>)}
    </header>
  )
}

export default Header