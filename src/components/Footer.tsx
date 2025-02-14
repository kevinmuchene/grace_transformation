function Footer() {
  return (
    <footer className="bg-gray-500">
      <div className="max-w-[120ch] mx-auto w-full">
        <section className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col gap-10 p-3">
            <p className="text-lg md:text-2xl w-full text-white">Messages</p>
            <p className="text-lg md:text-2xl w-full text-white">Sermon</p>
            <p className="text-lg md:text-2xl w-full text-white">Give</p>
          </div>
          <div className="my-2 p-3">
            <p className="text-3xl text-white">Map</p>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <div className="text-center text-lg md:text-2xl w-full p-6">
            <p className="text-white">Service Time: 11:00AM</p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row justify-around p-5">
            {/* <section className="flex justify-evenly"> */}
            <p className="md:text-2xl w-full text-center text-white">
              Concordia University Texas, 11400 Concordia University Dr, Austin,
              TX 78726
            </p>
            <p className=" md:text-2xl w-full text-center text-white">
              123-587-9874
            </p>
            <p className="md:text-2xl w-full text-center text-white">
              email@email.com
            </p>
            {/* </section> */}
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
