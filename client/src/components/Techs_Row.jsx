import Techs_Icon from "./Techs_Icon";

const Techs_Row = ({ type, techsByType }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <h2 className="text-xl">{type}</h2>
      <div className="flex flex-wrap gap-8 p-6 rounded-xl bg-mybg1 dark:bg-mybg1d dark:shadow-white">
        {techsByType.map((technology, index) => { 
          return (
            <Techs_Icon key={index} name={technology.name} Icon={technology.Icon} className="" />
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