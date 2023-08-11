const Button = ({text,backgroundColor,onAddBtnClick}) => {
  return (
    <button className='btn' style={{backgroundColor: backgroundColor}} onClick={onAddBtnClick}>{text}</button>
  )
}

Button.defaultProps={
    text: 'Add',
    backgroundColor: 'black'
}

export default Button