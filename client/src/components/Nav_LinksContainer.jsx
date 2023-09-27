import Nav_Link from "./Nav_Link";

const Nav_LinksContainer = ({ NAV_TEXTS, currentSection, containerClassName, largeDevice, clickHandler }) => {
  
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
        <Nav_Link to="cv" largeDevice={largeDevice} /> 
        <Nav_Link to="linkedin" largeDevice={largeDevice} />
        <Nav_Link to="github" largeDevice={largeDevice} />
      </div>
    </div>
  );
};

export default Nav_LinksContainer;