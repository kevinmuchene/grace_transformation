"use client";

import React from "react";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("./MessageLandingPage"), { ssr: false });

function page() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="font-mono text-2xl md:text-3xl mt-10">Sermons</h1>
      </div>
      <NoSSR />
    </>
  );
}

export default page;
