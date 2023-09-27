const Techs_Icon = ({ label, Icon, className }) => {
  return (
    <div className="flex flex-col items-center">
      <Icon size={60} className={className} />
      <h3 className="text-sm lg:text-base">{label}</h3>
    </div>
  );
};

export default Techs_Icon;
