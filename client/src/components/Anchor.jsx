import Button from "./Button";

const Anchor = ({ href, text }) => {
  return (
    <a className="mx-2" href={href} target="_blank" rel="noopener noreferrer">
      <Button text={text} />
    </a>
  );
};

export default Anchor;
