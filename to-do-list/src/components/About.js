import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className='about'>
      <h4>Version: 1.0.0.0</h4>
      <h4>Developed By: Isuru Madushan</h4>
      <Link to='/'>{'<<'}Go back</Link>
    </div>
  )
}

export default About