const Jumbotron = ({ title, subtitle }: { title: string, subtitle: string }) => {
  return (
    <section className="flex items-center justify-center w-full p-12 text-center relative overflow-hidden bg-no-repeat bg-cover bg-image-jumbotron bg-black">
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-fixed bg-[#0000005a]">
        <div className="flex justify-center items-center h-full">
          <div className="text-white">
            <h2 className="font-semibold text-4xl mb-4">{title}</h2>
            <h4 className="font-semibold text-xl mb-6">{subtitle}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;