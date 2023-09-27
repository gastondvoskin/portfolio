const Techs_Icon = ({ name, Icon, className }) => {
  return (
    <div className="flex flex-col items-center">
      <Icon size={60} className={className} />
      <h3 className="text-sm lg:text-base">{name}</h3>
    </div>
  );
};

export default Techs_Icon;
