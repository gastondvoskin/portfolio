import Button from "./Button";

const Anchor = ({ href, text }) => {
  return (
    <a className="" href={href} target="_blank" rel="noopener noreferrer">
      <Button text={text} />
    </a>
  );
};

export default Anchor;
