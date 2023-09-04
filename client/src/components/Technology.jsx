import icons from "../assets/icons"; // Importa el objeto con todas las imágenes SVG

const Technology = ({ label, array }) => {
  return (
    <div>
      <h2>{label}</h2>

      <div className="flex flex-wrap justify-center">
        {array.map((element, index) => (
          <div
            key={index}
            className="hover:bg-slate-600 dark:hover:bg-slate-300"
          >
            <div className="flex flex-col justify-center items-center w-12 h-12 m-6 md:w-16 md:h-16">
              <img
                className="pb-2"
                src={icons[element.name]}
                alt={element.name}
              />
              <p className="text-xs text-mybg2 dark:text-mybg2d">
                {element.name.toUpperCase()}
              </p>
            </div>

            {/* <div className="absolute top-0 left-0 flex justify-center items-center w-24 h-24 opacity-0 hover:opacity-100"> */}
            {/* <p className="absolute top-0 2-24 h-24 opacity-0 hover:opacity-100">
                  {element.name.toUpperCase()}
                </p> */}
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
