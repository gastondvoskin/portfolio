const Contact_Icon = ({ href, Icon, size, className }) => {
  return (
    <div>
      <a href={href} target="_blank">
        <Icon size={size} className={className} />
      </a>
    </div>
  );
};

export default Contact_Icon;
