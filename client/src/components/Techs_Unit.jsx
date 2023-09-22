import icons from "../assets/technologyIcons/indexIcons"; 

const Techs_Unit = ({ technology }) => {
  return (
    <div>
      <p>{technology}</p>
      <img
        src={icons[technology]}
        alt={technology}
      />
    </div>
  )
}

export default Techs_Unit