import React from "react";

function Give() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 ">
      <p className="font-extrabold text-xl md:text-3xl">Give</p>
      <div
        className="p-4 md:p-8 md:text-center flex flex-col md:gap-20"
       
      >
        <p className="text-orange-500 mt-6 font-bold md:text-2xl">
          Because of your faithful giving, we can keep pursuing the ministry God
          has called us to.
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between mt-10 md:px-8 md:text-lg md:text-left">
          <div className="md:space-y-6">
            <p className="font-semibold">Bank</p>
            <p>
              <span className="font-semibold">Account number:</span> 20894524
            </p>
            <p>
              <span className="font-semibold">Routing number:</span> 34798234
            </p>
          </div>

          <div className="md:space-y-6">
            <p className="font-semibold">Cash App</p>
            <p>
              <span className="font-semibold">Name:</span> Grace Connect
              Transformation
            </p>
            <p>
              {" "}
              <span className="font-semibold">Number:</span> 123-578-9854
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Give;
