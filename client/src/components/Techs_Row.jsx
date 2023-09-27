import Techs_Icon from "./Techs_Icon";

const Techs_Row = ({ type, techsByType }) => {
  return (
    <div className="flex flex-col items-center gap-1 rounded-xl bg-mybg1 dark:bg-mybg1d dark:shadow-white">
      <h2 className="text-xl p-2 text-myacc font-bold lg:text-2xl text-left">{type}</h2>
      <div className="flex flex-wrap justify-center gap-8 p-4">
        {techsByType.map((technology, index) => { 
          return (
            <Techs_Icon key={index} name={technology.name} Icon={technology.Icon} className={technology.className} />
          )
        })}
      </div>
    </div>
  )
}

export default Techs_Row;