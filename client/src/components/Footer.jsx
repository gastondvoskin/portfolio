const Footer = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const authors = dataOwner === 'dvoskin' ? "Gastón Dvoskin & Santiago Rovaletti" : "Santiago Rovaletti & Gastón Dvoskin";

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      name="footer" 
      className="flex flex-col w-full justify-center items-center h-32 bg-white text-black text-sm border-t-4 border-solid border-black dark:bg-slate-900 dark:text-white lg:text-lg">
        <h1>{`© ${currentYear} ${authors}.`}</h1> 
        <h1>All Rights Reserved. </h1>
    </footer>
  );
};

export default Footer;
