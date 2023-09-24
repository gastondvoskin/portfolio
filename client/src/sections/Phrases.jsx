import dataPhrases from "../data/dataDvoskin/dataPhrases";
import SectionContainer from "../components/SectionContainer";
import Title from "../components/Title";
import { useState } from "react";
import Button from "../components/Button";
import { FaRegSurprise } from "react-icons/fa";

const Phrases = () => {
  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * dataPhrases.length);
    return dataPhrases[randomIndex];
  };

  const [ randomPhrase, setRandomPhrase ] = useState(getRandomPhrase());
  const onClickHandler = () => {
    setTimeout(() => setRandomPhrase(getRandomPhrase()), 200);
  };

  return (
    <SectionContainer name="" bgNumber={2}>
        <Title text="INSPIRING QUOTES"/>
        <div className="flex flex-col mt-6 px-4 items-center text-center font-sans md:w-4/5 lg:w-3/4">
            <p className="text-2xl md:text-2xl">{randomPhrase.phrase}</p>
            <p className="text-xl mb-10 md:text-xl">Author: {randomPhrase.author}</p>
            <Button text="Inspire me" icon={FaRegSurprise} onClickHandler={onClickHandler} />
        </div>
    </SectionContainer>
  );
};

export default Phrases;

