import { useState } from "react";
import axios from "axios"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import Form_Input from "./Form_Input";

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
    <div className="w-full lg:w-1/2 mb-16">
			<div className="leading-loose">
				<form
					onSubmit={onSubmit}
					className="max-w-xl m-4 p-6 sm:p-10 bg-mybg2 dark:bg-mybg2d rounded-xl shadow-xl text-left"
				>
          <Form_Input Element="input" name="name" labelText="Full Name" value={inputs.name} onChange={onChange} placeholder="Your name"/>
          <Form_Input Element="input" name="email" labelText="Email" value={inputs.email} onChange={onChange} placeholder="Your email"/>
          <Form_Input Element="textarea" name="message" labelText="Message" value={inputs.message} onChange={onChange} placeholder="Your message" />


          <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
            <button
              type="submit"
            >
              {sending ? (
                "loading"
              ) : (
                <div>
                  {envelopeIcon} <span className="ml-2">Send</span> 
                </div>
              )}
            </button>
          </div>

				</form>
			</div>
		</div>
  )
}

export default Form;