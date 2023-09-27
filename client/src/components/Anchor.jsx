import Button from "./Button";

const Anchor = ({ href, text, Icon }) => {
  return (
    <a className="" href={href} target="_blank" rel="noopener noreferrer">
      <Button text={text} Icon={Icon}/>
    </a>
  );
};

export default Anchor;
