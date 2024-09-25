const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full py-4 px-8 z-10 bg-white border-t border-black m-auto">
      <div className="text-center text-black">
        © 2024 &nbsp;
        <a 
          className="text-black hover:text-gray-700 transition duration-300" 
          href="https://your-casino-app-url.com/"
        >
          Casino App
        </a>
      </div>
    </footer>
  );
};

export default Footer;