import { useState } from "react";
import axios from "axios"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import Form_Input from "./Form_Input";
import Button from "./Button";

const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} />



const Form = () => {
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
      className="flex flex-col w-full lg:w-1/2 mt-6 mb-20 p-6 sm:p-10 bg-mybg2 dark:bg-mybg2d rounded-xl shadow-xl"
    >
      <Form_Input Element="input" name="name" labelText="Full Name" value={inputs.name} onChange={onChange} placeholder="Your name"/>
      <Form_Input Element="input" name="email" labelText="Email" value={inputs.email} onChange={onChange} placeholder="Your email"/>
      <Form_Input Element="textarea" name="message" labelText="Message" value={inputs.message} onChange={onChange} placeholder="Your message" />
      <Button parent="form" text={sending ? "SENDING..." : "SEND"} type="submit" icon={envelopeIcon} onClickHandler={() => {}} />
    </form>
  )
}

export default Form;