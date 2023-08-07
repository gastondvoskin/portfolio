import React from "react";

const Contact = () => {
  const TEXT = "Let's get in touch! I would love to hear from you. Whether you have a  question, feedback, or just want to say hello, feel free to contact me and I'll get back to you as soon as possible. Your message is important to me, and I'm excited to connect with you!"; 

  return (
    <main
      className="flex flex-col items-center pt-16 bg-mybg2 dark:bg-mybg2d"
      name="contact"
    >
      <div className="flex flex-col items-center w-4/5 ">
        <h1 className="text-6xl">Contact</h1>
        <p>{TEXT}</p>
      </div>

    </main>
  );
};

export default Contact;
