const Contact_Icon = ({ href, Icon, size, className }) => {
  return (
    <a href={href} target="_blank">
      <Icon size={size} className={className} />
    </a>
  );
};

export default Contact_Icon;
