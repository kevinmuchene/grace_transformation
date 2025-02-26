"use client";

import React from "react";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("./MessageLandingPage"), { ssr: false });

function page() {
  return (
    <>
      <NoSSR />
    </>
  );
}

export default page;
