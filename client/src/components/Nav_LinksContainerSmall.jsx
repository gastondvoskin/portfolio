import Nav_Link from "./Nav_Link";

const Nav_LinksContainerSmall = ({ NAV_TEXTS, setCurrentSection, currentSection, handleRenderMenu, renderedMenu }) => {
  
  return (
    <div className={`${renderedMenu ? "fixed" : "hidden"} inset-0 z-10 bg-mybg1 text-3xl dark:bg-mybg2d`}>
      <div className="flex flex-col h-full items-center justify-center">
        {NAV_TEXTS.map((text, index) => (
          <Nav_Link key={index} to={text} onClick={() => {setCurrentSection(text); handleRenderMenu()}} isCurrent={currentSection === text} />
        ))}
        <Nav_Link to="cv" mobile={true} /> 
        <Nav_Link to="linkedin" mobile={true} />
        <Nav_Link to="github" mobile={true} />
      </div>
    </div>
  );
};

export default Nav_LinksContainerSmall;







        