import { dataDvoskinContact } from "../data/dataDvoskin/dataContact";
import { dataRovalettiContact } from "../data/dataRovaletti/dataContact";

const Footer = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const dataContact = dataOwner ===  "dvoskin" ? dataDvoskinContact : dataRovalettiContact
  return (
    <main name="footer" className="flex w-full justify-center h-50 items-center bg-white text-mytextnav border-t-4 border-solid border-black dark:bg-slate-900 dark:text-white">
      <div name="footer" className="flex flex-col w-full justify-center items-center bg-white text-mytextnav border-t-4 border-solid border-black dark:bg-slate-900 dark:text-white">
      </div>
        {dataOwner === "dvoskin" ? <h1>Developed by Gastón Dvoskin & Santiago Rovaletti</h1> : <h1>Developed by Santiago Rovaletti & Gastón Dvoskin</h1>}
    </main>
  );
};

export default Footer;
