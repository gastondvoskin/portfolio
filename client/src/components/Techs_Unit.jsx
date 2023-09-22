import icons from "../assets/technologyIcons/indexIcons"; 

const Techs_Unit = ({ technology }) => {
  return (
    <div className="flex flex-col items-center">
      <p>{technology}</p>
      <img
        className="w-24"
        src={icons[technology]}
        alt={technology}
      />
    </div>
  )
}

export default Techs_Unit