import icons from "../assets/technologyIcons/indexIcons"; 

const TechnologiesArticle = ({ label, technologiesArray }) => {
  return (
    <div>
      <h2>{label}</h2>
      <div className="flex flex-wrap justify-center">
        {technologiesArray.map((technologyItem, index) => (
          <div
            key={index}
            className="hover:bg-slate-600 dark:hover:bg-slate-300"
          >
            <div className="flex flex-col justify-center items-center w-12 h-12 m-6 md:w-16 md:h-16">
              <img
                className="pb-2"
                src={icons[technologyItem]}
                alt={technologyItem}
              />
              <p className="text-xs text-mybg2 dark:text-mybg2d">
                {technologyItem.toUpperCase()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesArticle;
