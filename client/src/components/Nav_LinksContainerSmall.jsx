import Nav_Link from "./Nav_Link";

const Nav_LinksContainerSmall = ({ handleRenderMenu, renderedMenu, NAV_TEXTS }) => {
  
  return (
    <div className={`${renderedMenu ? "fixed" : "hidden"} inset-0 z-10 bg-mybg1 text-3xl dark:bg-mybg2d`}>
      <div className="flex flex-col h-full items-center justify-center">
        {NAV_TEXTS.map((text, index) => (
          <Nav_Link key={index} handleRenderMenu={handleRenderMenu} to={text} />
        ))}
      </div>
    </div>
  );
};

export default Nav_LinksContainerSmall;







        