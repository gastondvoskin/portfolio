import {name} from '../data/dataContact'
import {aboutMe} from '../data/dataAbout'
import {Element} from 'react-scroll'
const About = () => {
  return (
    <Element name='about'>
      <div >
      <p>Hi im {name}</p>
      <p>{aboutMe}</p>
    </div>
    </Element>
    
  )
}

export default About