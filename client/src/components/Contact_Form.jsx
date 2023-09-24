import { useState } from "react";
import axios from "axios"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import Contact_Form_Input from "./Contact_Form_Input";
import Button from "./Button";

const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} />



const Contact_Form = () => {
  const [inputs,setInputs] = useState({
    name:"",
    email:"",
    message:""
  })

  const [sending, setSending] = useState(false);

  const onChange = (event) => {
    const { value, name } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await axios.post("/contact", inputs);
      alert(response.data);
      setInputs({
        name:"",
        email:"",
        message:""
      })
    } catch (error) {
      alert("An error occured.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col w-full mt-6 mb-20 p-2 md:p-10 bg-mybg2 dark:bg-mybg2d rounded-md shadow-xl"
    >
      <Contact_Form_Input Element="input" name="name" labelText="Name" value={inputs.name} onChange={onChange} placeholder="Your name"/>
      <Contact_Form_Input Element="input" name="email" labelText="Email" value={inputs.email} onChange={onChange} placeholder="Your email"/>    
      <Contact_Form_Input Element="textarea" name="message" labelText="Message" value={inputs.message} onChange={onChange} placeholder="Your message" />
      <Button parent="form" text={sending ? "SENDING..." : "SEND"} type="submit" icon={envelopeIcon} onClickHandler={() => {}} />
    </form>
  )
}

export default Contact_Form;