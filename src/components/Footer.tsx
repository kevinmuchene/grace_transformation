import Link from "next/link";
import MapComponent from "./MapComponent";

function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-[120ch] mx-auto w-full">
        <section className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-col gap-10 p-3 md:flex-[1] w-full md:w-1/4 items-center justify-center">
            <p className="text-lg md:text-2xl w-full text-white text-center">
              <Link href="/message">Messages</Link>
            </p>

            <p className="text-lg md:text-2xl w-full text-white text-center">
              <Link href="/contact">Contact</Link>
            </p>

            <p className="text-lg md:text-2xl w-full text-white text-center">
              <Link href="/give">Give</Link>
            </p>
          </div>
          <div className="my-2 p-3 md:flex-[3] w-full md:w-3/4">
            <MapComponent />
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
