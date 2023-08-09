import Form from "../components/Form";

const Contact = () => {
  const TEXT = "Let's get in touch! I would love to hear from you. Whether you have a  question, feedback, or just want to say hello, feel free to contact me and I'll get back to you as soon as possible. Your message is important to me, and I'm excited to connect with you!"; 

  return (
    <main
      className="flex flex-col items-center pt-24 pb-16 bg-mybg1 dark:bg-mybg1d"
      name="contact"
    >
      <div className="flex flex-col items-center w-4/5 ">
        <h1 className="mb-16 text-5xl text-myacc dark:text-myaccd">CONTACT</h1>
        <p className="font-sans">{TEXT}</p>
        <Form />
      </div>
    </main>
  );
};

export default Contact;
