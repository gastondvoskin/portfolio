import Techs_Icon from "./Techs_Icon";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";



const Techs_Row = ({ type, techsByType }) => {
  
  return (
    <div className="flex flex-col items-center gap-1">
      <h2 className="text-2xl">{type}</h2>

      <div className="flex flex-wrap gap-8 p-6 bg-mybg1 dark:bg-mybg1d dark:shadow-white">
        
        {techsByType.map((technology, index) => { 
          console.log(technology)
          return (
            <Techs_Icon key={index} label={technology.name} Icon={technology.Icon} className="bg-blue-300 dark:bg-blue-600" />
          )
        })}

        
      </div>
    </div>
  )
}

export default Techs_Row;

{/* <Techs_Icon key={index} Icon={SiTypescript} label="TypeScript"/>) */}

{/* <Techs_Icon Icon={SiTypescript} className="bg-blue-300 dark:bg-blue-600" label="TypeScript"/>
        <Techs_Icon Icon={SiJavascript} className="bg-yellow-300 dark:bg-yellow-600" label="JavaScript"/> */}