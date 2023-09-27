const Techs_Icon = ({ name, Icon, className }) => {
  return (
    <div className="flex flex-col items-center">
      <Icon size={75} className={className} />
      <h3 className="mt-1 lg:mt-2 text-sm lg:text-base">{name}</h3>
    </div>
  );
};

export default Techs_Icon;
