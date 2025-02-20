import MapComponent from "@/components/MapComponent";
import React from "react";

function Contact() {
  return (
    <>
      <p className="text-xl md:text-4xl text-center font-extrabold">Contact</p>
      <div className=" flex items-center justify-center p-6 bg-white">
        <main className="flex flex-col gap-7 md:flex-row items-center space-x-8 max-w-[120ch] mx-auto w-full justify-around">
          <section className="flex items-center justify-center w-full">
            <MapComponent />
          </section>

          <section className=" md:text-lg space-y-2">
            <p>(123) 456 7890</p>
          
            <br />
            <p>
              Concordia University Texas, <br />
              11400 Concordia University Dr, <br />
              Austin, TX 78726
            </p>
            <br />
            <p>Sunday: 11:00 AM</p>
          </section>
        </main>
      </div>

      <section className="md: p-7">
        <p className="text-center text-xl md:text-3xl mb-4 md:mb-6 font-extrabold"> Email</p>
        <p className="text-center p-2 md:text-lg">General Inquiries</p>
        <p className="text-center p-2 italic text-blue-500">email@gmail.com</p>
      </section>
    </>
  );
}

export default Contact;
