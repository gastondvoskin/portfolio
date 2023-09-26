import dataPhrases from "../data/dataDvoskin/dataPhrases";
import SectionContainer from "../components/SectionContainer";
import Title from "../components/Title";
import { useState } from "react";
import Button from "../components/Button";
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
        <div className="flex flex-col mt-6 px-4 items-center font-sans sm:mt-0 md:mt-6 md:w-3/4 lg:w-1/2">
            <div className="flex flex-col h-">
                <BiSolidQuoteLeft className="text-lg text-left lg:text-2xl"  />
                <span className="text-center mx-auto my-2 text-base md:text-xl">{randomPhrase.phrase}</span>
                <BiSolidQuoteRight className="text-lg ml-auto lg:text-2xl" />
            </div>    
            <p className="text-sm my-4 md:mb-6 md:text-base">Author: {randomPhrase.author}</p>
            <Button text="INSPIRE ME" /* icon={<FaRegSurprise />} */ onClickHandler={onClickHandler} />
        </div>
    </SectionContainer>
  );
};

export default Phrases;

