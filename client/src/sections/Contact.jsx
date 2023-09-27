import Contact_Form from "../components/Contact_Form";
import Contact_IconsContainer from "../components/Contact_IconsContainer";
import SectionContainer from "../components/SectionContainer";
import Title from "../components/Title";

const Contact = () => {
  const TEXT =
    "Let's get in touch! I would love to hear from you, feel free to contact me and I'll get back to you as soon as possible.";

  return (
    <SectionContainer name="contact" bgNumber={1}>
      <Title text="CONTACT"/>
      <div className="flex flex-col px-4 items-center md:w-3/4 lg:w-1/2">
        <p className="mb-8 text-center text-sm font-sans md:text-base">{TEXT}</p>
        {/* <Contact_Form /> */}
        <Contact_IconsContainer />
      </div>
    </SectionContainer>
  );
};

export default Contact;
