import React from "react";

function LandingPage() {
  return (
    <div
      className="bg-stone-500 grid grid-rows-[20px_1fr_20px] md:items-center justify-items-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      <main
        className="flex flex-col gap-10 row-start-2 items-center sm:items-start"
      >
        <p className="text-2xl text-center w-full md:text-5xl text-white">
          WE ARE GLAD YOU ARE HERE!
        </p>
        <p className="text-lg md:text-3xl w-full text-center text-white">Sundays</p>
        <p className="text-lg md:text-3xl w-full text-center text-white">11:00 am</p>
        <p className="text-lg md:text-3xl w-full text-center text-white">
          Concordia University
        </p>
      </main>
    </div>
  );
}

export default LandingPage;
