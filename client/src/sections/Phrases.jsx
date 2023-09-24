import dataPhrases from "../data/dataDvoskin/dataPhrases";
import SectionContainer from "../components/SectionContainer";
import Title from "../components/Title";
import { useState } from "react";
import Button from "../components/Button";
import { FaRegSurprise } from "react-icons/fa";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";


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
        <div className="flex flex-col mt-6 px-4 items-center font-sans md:w-4/5 lg:w-3/4">

            <div className="flex flex-col h-56">
                <BiSolidQuoteLeft className="text-2xl text-left lg:text-4xl"  />
                <span className="text-xl mx-4 md:text-2xl text-center">{randomPhrase.phrase}</span>
                <BiSolidQuoteRight className="text-2xl ml-auto lg:text-4xl" />
            </div>
            
            <p className="text-lg mb-10 md:text-xl">Author: {randomPhrase.author}</p>
            <Button text="INSPIRE ME" /* icon={<FaRegSurprise />} */ onClickHandler={onClickHandler} />
        </div>
    </SectionContainer>
  );
};

export default Phrases;

