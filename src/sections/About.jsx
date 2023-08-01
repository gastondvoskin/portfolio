import {name} from '../data/dataContact'
import {dataAbout} from '../data/dataAbout'

const About = () => {
  return (
    <div name ='about'>
      <p>Hi im {name}</p>
      <p>{dataAbout}</p>
    </div>
  )
}

export default About