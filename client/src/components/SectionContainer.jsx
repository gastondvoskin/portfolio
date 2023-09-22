const SectionContainer = ({ name, bgNumber, children }) => {
  return (
    <section
      name={name}
      className={`flex flex-col w-full items-center pt-28 pb-28 bg-mybg${bgNumber} dark:bg-mybg${bgNumber}d relative`}
    >
        <div className="absolute inset-0 w-full h-20">
            <div className={`transform skew-y-2 origin-top-right h-full w-full bg-mybg${bgNumber} dark:bg-mybg${bgNumber}d`}></div>
        </div>
        {children}
    </section>
  )
}

export default SectionContainer
