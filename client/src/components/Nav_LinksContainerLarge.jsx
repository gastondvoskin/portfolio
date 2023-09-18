import Nav_Link from "./Nav_Link";

const Nav_LinksContainerLarge = ({ NAV_TEXTS }) => {
  return (
    <div className="hidden lg:flex">
      <div className="flex flex-row h-full items-center justify-center">
        {NAV_TEXTS.map((text, index) => (
          <Nav_Link key={index} to={text} />
        ))}
      </div>
    </div>
  )
}

export default Nav_LinksContainerLarge