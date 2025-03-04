"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import asyncImage from "../../../public/asyncImage.webp";

const NoSSR = dynamic(() => import("./MessageLandingPage"), { ssr: false });

function page() {
  return (
    <>
      <div className="flex justify-center">
        <Image
          src={asyncImage}
          alt="Async Programming Image"
          style={{
            maxWidth: "40%",
            height: "auto",
          }}
        />
      </div>
      <NoSSR />
    </>
  );
}

export default page;
