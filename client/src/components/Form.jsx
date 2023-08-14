import { useState } from "react";
import axios from "axios"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 

const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} />



const Form = () => {
  const [inputs,setInputs] = useState({
    name:"",
    email:"",
    message:""
  })


  const [loading, setLoading] = useState(false);

  const onChange = (event) => {
    const { value, name } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/contact", inputs);
      alert(response.data);
      setInputs({
        name:"",
        email:"",
        message:""
      })
    } catch (error) {
      alert("Error al enviar la consulta");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={onSubmit}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
          <div className="font-general-regular mb-4">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-1"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              value={inputs.name}
              onChange={onChange}
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              aria-label="Name"
              required
            />
          </div>
          <div className="font-general-regular mb-4">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              value={inputs.email}
              onChange={onChange}
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              type="Email"
              id="email"
              name="email"
              placeholder="Your email"
              aria-label="Email"
              required
            />
          </div>
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
              value={inputs.message}
              onChange={onChange}
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

          <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
            <button
              type="submit"
            >
              {loading ? (
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