import {name} from '../data/dataContact'
import {aboutMe} from '../data/dataAbout'

const About = () => {
  return (
    <div name ='about'>
      <p>Hi im {name}</p>
      <p>{aboutMe}</p>
    </div>
  )
}

export default About