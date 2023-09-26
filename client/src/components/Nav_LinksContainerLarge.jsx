import Nav_Link from "./Nav_Link";

const Nav_LinksContainerLarge = ({ NAV_TEXTS, setCurrentSection, currentSection }) => {
  return (
    <div className="hidden lg:flex">
      <div className="flex flex-row h-full items-center justify-center">
        {NAV_TEXTS.map((text, index) => (
          <Nav_Link key={index} to={text} onClick={() => setCurrentSection(text)} isCurrent={currentSection === text} />
        ))}
        <Nav_Link to="cv" mobile={false} /> 
        <Nav_Link to="linkedin" mobile={false} />
        <Nav_Link to="github" mobile={false} />
      </div>
    </div>
  )
}

export default Nav_LinksContainerLarge