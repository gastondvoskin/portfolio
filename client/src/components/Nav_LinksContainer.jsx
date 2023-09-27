import Nav_Link from "./Nav_Link";

const Nav_LinksContainer = ({ NAV_TEXTS, setCurrentSection, currentSection, handleRenderMenu, renderedMenu, containerClassName, largeDevice, clickHandler }) => {
  
  return (
    <div className={containerClassName}>
      <div className={`flex ${largeDevice ? "flex-row" : "flex-col"} h-full items-center justify-center`}>
        {NAV_TEXTS.map((text, index) => (
          <Nav_Link 
            key={index} 
            to={text} 
            onClick={() => clickHandler(text)} 
            isCurrent={currentSection === text} />
        ))}
        <Nav_Link to="cv" mobile={true} /> 
        <Nav_Link to="linkedin" mobile={true} />
        <Nav_Link to="github" mobile={true} />
      </div>
    </div>
  );
};

export default Nav_LinksContainer;