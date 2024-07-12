const Contact_Icon = ({ href, Icon, size, className, title }) => {
  return (
    <div className="flex flex-col items-center">
      <a href={href} target="_blank" title={title}>
        <Icon size={size} className={className} />
      </a>
      <p className="text-xs">{title}</p>
    </div>
  );
};

export default Contact_Icon;
