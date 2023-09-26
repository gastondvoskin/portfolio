import Techs_Unit from "./Techs_Unit";

const Techs_ByType = ({ subtitle, techsByType }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <h2 className="text-2xl">{subtitle}</h2>
      <div className="flex flex-wrap gap-8 p-6 bg-mybg1 dark:bg-mybg1d dark:shadow-white">
        {techsByType.map((technology, index) => <Techs_Unit key={index} technology={technology}/>)}
      </div>
    </div>
  )
}

export default Techs_ByType;