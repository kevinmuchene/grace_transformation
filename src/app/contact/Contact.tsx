import React from "react";

function Contact() {
  return (
    <>
      <p className="text-xl md:text-4xl text-center">Contact</p>
      <div className="min-h-full flex items-center justify-center p-6 bg-white">
        <main className="flex flex-col gap-7 md:flex-row items-center space-x-8 max-w-[120ch] mx-auto w-full justify-around">
          <section className="flex items-center justify-center">
            Map
          </section>

          <section className=" md:text-lg space-y-2">
            <p>(123) 456 7890</p>
            <p>email@gmail.com</p>
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
    </>
  );
}

export default Contact;
