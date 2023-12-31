const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      name="footer" 
      className="flex flex-row w-full justify-center items-center h-16 bg-white text-black text-sm border-t-2 border-solid border-black dark:bg-slate-900 dark:text-white lg:text-lg lg:h-16">
        <p>{`© ${currentYear} Gastón Dvoskin.`} All Rights Reserved.</p> 
    </footer>
  );
};

export default Footer;
