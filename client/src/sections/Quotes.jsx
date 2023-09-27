import dataQuotes from "../data/dataDvoskin/dataQuotes";
import SectionContainer from "../components/SectionContainer";
import Title from "../components/Title";
import { useState } from "react";
import Button from "../components/Button";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import { FaFaceGrinStars } from "react-icons/fa6";


const Quotes = () => {
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * dataQuotes.length);
    return dataQuotes[randomIndex];
  };
  const [ randomQuote, setRandomQuote ] = useState(getRandomQuote());
  const onClickHandler = () => {
    setRandomQuote(getRandomQuote());
  };

  return (
    <SectionContainer name="" bgNumber={2}>
      <Title text="Thanks for your visit!"/>
      <div className="flex flex-col mt-6 px-4 items-center font-sans sm:mt-0 md:mt-6 md:w-3/4 lg:w-1/2">
        <div className="flex flex-col h-">
          <BiSolidQuoteLeft className="text-lg text-left lg:text-2xl"  />
          <span className="text-center mx-auto my-2 text-base md:text-xl">{randomQuote.quote}</span>
          <BiSolidQuoteRight className="text-lg ml-auto lg:text-2xl" />
        </div>    
        <p className="text-sm my-4 md:mb-6 md:text-base">Author: {randomQuote.author}</p>
        <Button text="INSPIRE ME" Icon={FaFaceGrinStars} onClickHandler={onClickHandler} />
      </div>
    </SectionContainer>
  );
};

export default Quotes;

