import React from "react";

function PassageError() {
  return (
    <>
      <h1 className="text-center md:text-xl p-4">
        Something wrong happend! Try refreshing the page!
      </h1>
      <div className="flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
          Go Back
        </button>
      </div>
    </>
  );
}

export default PassageError;
