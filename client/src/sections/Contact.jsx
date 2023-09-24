import Contact_Form from "../components/Contact_Form";
import Contact_IconsContainer from "../components/Contact_IconsContainer";
import SectionContainer from "../components/SectionContainer";
import Title from "../components/Title";

const Contact = () => {
  const TEXT =
    "Let's get in touch! I would love to hear from you. Whether you have a  question, feedback, or just want to say hello, feel free to contact me and I'll get back to you as soon as possible. Your message is important to me, and I'm excited to connect with you!";

  return (
    <SectionContainer name="contact" bgNumber={1}>
      <Title text="CONTACT"/>
      <div className="flex flex-col px-4 items-center md:w-4/5 lg:w-3/4">
        <p className="text-center text-sm font-sans md:text-base">{TEXT}</p>
        <Contact_Form />
        <Contact_IconsContainer />
      </div>
    </SectionContainer>
  );
};

export default Contact;
