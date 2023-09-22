import Form from "../components/Form";
import ContactIcons from "../components/ContactIcons";
import SectionContainer from "../components/SectionContainer";

const Contact = () => {
  const TEXT =
    "Let's get in touch! I would love to hear from you. Whether you have a  question, feedback, or just want to say hello, feel free to contact me and I'll get back to you as soon as possible. Your message is important to me, and I'm excited to connect with you!";

  return (

    <SectionContainer name="contact" bgNumber={1}>
      <div className="flex flex-col items-center w-4/5 ">
        <h1 className="mb-16 text-3xl font-bold text-myacc dark:text-myaccd md:text-5xl">
          CONTACT
        </h1>
        <p className="font-sans max-w-3xl text-center">{TEXT}</p>
        <Form />
        <ContactIcons />
      </div>
    </SectionContainer>
  );
};

export default Contact;



