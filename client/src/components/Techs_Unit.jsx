import icons from "../assets/technologyIcons/indexIcons"; 

const Techs_Unit = ({ technology }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        className="w-10 mb-2 lg:w-16"
        src={icons[technology]}
        alt={technology}
      />
      <h3 className="text-sm lg:text-base">{technology}</h3>
    </div>
  )
}

export default Techs_Unit